<?php

/*
 * This file is part of askvortsov/flarum-categories
 *
 *  Copyright (c) 2021 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumCategories;

use Askvortsov\FlarumCategories\Content\Categories;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\Extend\ApiSerializer;
use Flarum\Extend\Event;
use Flarum\Post\Event\Hidden;
use Flarum\Post\Event\Posted;
use Flarum\Post\Event\Restored;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Tags\Api\Controller\ListTagsController;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Event\Creating;
use Flarum\Tags\Event\Saving;
use Askvortsov\FlarumCategories\Attributes\TagAttributes;
use Askvortsov\FlarumCategories\Listeners\CreateTagAttributes;
use Askvortsov\FlarumCategories\Listeners\SaveTagAttributes;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/categories', 'categories', Categories::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Settings())
        ->serializeToForum('categories.keepTagsNav', 'askvortsov-categories.keep-tags-nav', 'boolval')
        ->serializeToForum('categories.fullPageDesktop', 'askvortsov-categories.full-page-desktop', 'boolval')
        ->serializeToForum('categories.compactMobile', 'askvortsov-categories.compact-mobile', 'boolval')
        ->serializeToForum('categories.parentRemoveIcon', 'askvortsov-categories.parent-remove-icon', 'boolval')
        ->serializeToForum('categories.parentRemoveDescription', 'askvortsov-categories.parent-remove-description', 'boolval')
        ->serializeToForum('categories.parentRemoveStats', 'askvortsov-categories.parent-remove-stats', 'boolval')
        ->serializeToForum('categories.parentRemoveLastDiscussion', 'askvortsov-categories.parent-remove-last-discussion', 'boolval')
        ->serializeToForum('categories.childBareIcon', 'askvortsov-categories.child-bare-icon', 'boolval', true),

    (new Extend\ApiController(ListTagsController::class))
        ->addOptionalInclude('lastPostedDiscussion.lastPostedUser'),

    (new Extend\ApiSerializer(TagSerializer::class))
        ->attributes(function ($serializer, $model, $attributes) {
            $settings = resolve(SettingsRepositoryInterface::class);
            if ($settings->get('askvortsov-categories.small-forum-optimized', false)) {
                $result = $model->discussions()
                    ->selectRaw('sum(comment_count) as postCount, count(id) as discussionCount')
                    ->whereVisibleTo($serializer->getActor())
                    ->get()[0];
                $attributes['discussionCount'] = (int) $result['discussionCount'];
                $attributes['postCount'] = (int) $result['postCount'];
            } else {
                // discussion count is loaded this way by default, no need to reiterate
                $attributes['postCount'] = (int) $model->post_count;
            }

            return $attributes;
        }),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attribute('joinTime', function ($serializer, $model) {
            return $serializer->formatDate($model->joined_at);
        }),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Event())
        ->listen(Hidden::class, function (Hidden $event) {
            Util::updateTagsPostCount($event->post, -1);
        })
        ->listen(Posted::class, function (Posted $event) {
            Util::updateTagsPostCount($event->post, 1);
        })
        ->listen(Restored::class, function (Restored $event) {
            Util::updateTagsPostCount($event->post, 1);
        }),

    (new ApiSerializer(TagSerializer::class))->attributes(TagAttributes::class),
    (new Event())->listen(Saving::class, SaveTagAttributes::class),
    (new Event())->listen(Creating::class, CreateTagAttributes::class),
];
