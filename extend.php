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

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Flarum\Post\Event\Hidden;
use Flarum\Post\Event\Posted;
use Flarum\Post\Event\Restored;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Tags\Api\Serializer\TagSerializer;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/categories', 'categories'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Settings())
        ->serializeToForum('categories.keepTagsNav', 'askvortsov-categories.keep-tags-nav', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.fullPageDesktop', 'askvortsov-categories.full-page-desktop', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.compactMobile', 'askvortsov-categories.compact-mobile', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.parentRemoveIcon', 'askvortsov-categories.parent-remove-icon', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.parentRemoveDescription', 'askvortsov-categories.parent-remove-description', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.parentRemoveStats', 'askvortsov-categories.parent-remove-stats', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.parentRemoveLastDiscussion', 'askvortsov-categories.parent-remove-last-discussion', function ($val) {
            return (bool) $val;
        })
        ->serializeToForum('categories.childBareIcon', 'askvortsov-categories.child-bare-icon', function ($val) {
            return (bool) $val;
        }),

    (new Extend\ApiController(ShowForumController::class))
        ->addInclude('tags.lastPostedDiscussion.lastPostedUser'),

    (new Extend\ApiSerializer(TagSerializer::class))
        ->mutate(function ($serializer, $model, $attributes) {
            $settings = app(SettingsRepositoryInterface::class);
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
            if ($serializer->getActor()->can('viewUserList')) {
                return $serializer->formatDate($model->joined_at);
            }
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
];
