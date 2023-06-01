<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Tags\Event\Saving;
use Askvortsov\FlarumCategories\Attributes\TagAttributes;

class SaveTagAttributes
{
    public function handle(Saving $event)
    {
        TagAttributes::handleTagEvent($event);
    }
}
