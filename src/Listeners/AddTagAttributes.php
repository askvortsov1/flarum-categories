<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class AddTagAttributes
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

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
            if ($this->settings->get('askvortsov-categories.small-forum-optimized', false)) {
                $result = $event->model->discussions()
                    ->selectRaw('sum(comment_count) as postCount, count(id) as discussionCount')
                    ->whereVisibleTo($event->actor)
                    ->get()[0];
                $event->attributes['discussionCount'] = (int) $result['discussionCount'];
                $event->attributes['postCount'] = (int) $result['postCount'];
            } else {
                // discussion count is loaded this way by default, no need to reiterate
                $event->attributes['postCount'] = (int) $event->model->post_count;
            }
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
