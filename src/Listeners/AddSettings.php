<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'attachSettings']);
    }

    public function attachSettings(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['categories.keepTagsNav'] = (bool) $this->settings->get('askvortsov-categories.keep-tags-nav');
            $event->attributes['categories.fullPageDesktop'] = (bool) $this->settings->get('askvortsov-categories.full-page-desktop');
            $event->attributes['categories.childBareIcon'] = (bool) $this->settings->get('askvortsov-categories.child-bare-icon');
            $event->attributes['categories.parentRemoveIcon'] = (bool) $this->settings->get('askvortsov-categories.parent-remove-icon');
            $event->attributes['categories.parentRemoveDescription'] = (bool) $this->settings->get('askvortsov-categories.parent-remove-description');
            $event->attributes['categories.parentRemoveStats'] = (bool) $this->settings->get('askvortsov-categories.parent-remove-stats');
            $event->attributes['categories.parentRemoveLastDiscussion'] = (bool) $this->settings->get('askvortsov-categories.parent-remove-last-discussion');
        }
    }
}
