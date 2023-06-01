<?php

namespace Askvortsov\FlarumCategories\Listeners;

use Flarum\Tags\Event\Creating;
use Askvortsov\FlarumCategories\Attributes\TagAttributes;

class CreateTagAttributes
{
    public function handle(Creating $event)
    {
        TagAttributes::handleTagEvent($event);
    }
}
