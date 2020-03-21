<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Api\Controller;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagAttributes
{

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addCommentCount']);
        $events->listen(WillGetData::class, [$this, 'includeRelationships']);
    }

    /**
     * @param Serializing $event
     */
    public function addCommentCount(Serializing $event)
    {
        if ($event->isSerializer(TagSerializer::class)) {
            $event->attributes['commentCount'] = $event->model->discussions->sum('comment_count') - $event->attributes['discussionCount'];
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
