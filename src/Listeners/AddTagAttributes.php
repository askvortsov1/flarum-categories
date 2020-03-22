<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagAttributes
{

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addpostCount']);
        $events->listen(WillGetData::class, [$this, 'includeRelationships']);
    }

    /**
     * @param Serializing $event
     */
    public function addpostCount(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $event->attributes['discussionCount'] = $event->model->discussions()->where('hidden_at', null)->where('is_private', false)->count();
            $event->attributes['postCount'] = $event->model->discussions()->where('hidden_at', null)->where('is_private', false)->sum('comment_count');
        }
        if ($event->isSerializer(BasicUserSerializer::class) && $event->actor->can('viewUserList')) {
            $event->attributes['joinTime'] = $event->formatDate($event->model->joined_at);
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeRelationships(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude([
                'tags.lastPostedDiscussion.lastPostedUser'
            ]);
        }
    }
}
