<?php

/*
 * This file is part of askvortsov/flarum-categories
 *
 *  Copyright (c) 2020 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumCategories;

use Askvortsov\FlarumCategories\Console\RecalculateTagStats;
use Flarum\Extend;
use Flarum\Post\Event\Hidden;
use Flarum\Post\Event\Posted;
use Flarum\Post\Event\Restored;
use FoF\Components\Extend\AddFofComponents;
use Illuminate\Contracts\Events\Dispatcher;

/**
 * @param \Flarum\Post\Post $post
 * @param int               $delta
 */
function updateTagsPostCount($post, $delta)
{
    if (!$post) {
        return;
    }

    foreach ($post->discussion->tags as $tag) {
        // We do not count private discussions in tags
        if (!$post->is_private && !$post->discussion->is_private) {
            $tag->post_count += $delta;
        }

        $tag->save();
    }
}

return [
    new AddFofComponents(),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/categories', 'categories'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\AddTagAttributes::class);
        $events->subscribe(Listeners\AddSettings::class);
    },
    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Console())->command(RecalculateTagStats::class),

    (new Extend\Event())
        ->listen(Hidden::class, function (Hidden $event) {
            updateTagsPostCount($event->post, -1);
        })
        ->listen(Posted::class, function (Posted $event) {
            updateTagsPostCount($event->post, 1);
        })
        ->listen(Restored::class, function (Restored $event) {
            updateTagsPostCount($event->post, 1);
        }),
];
