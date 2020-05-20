<?php

/*
 * This file is part of askvortsov/flarum-categories.
 *
 * Copyright (c) 2020 Alexander Skvortsov.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Askvortsov\FlarumCategories;

use Askvortsov\FlarumCategories\Console\RecalculateTagStats;
use Flarum\Extend;
use FoF\Components\Extend\AddFofComponents;
use Illuminate\Contracts\Events\Dispatcher;



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
    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Console)->command(RecalculateTagStats::class),
];
