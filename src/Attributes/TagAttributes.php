<?php

namespace Askvortsov\FlarumCategories\Attributes;

use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;
use Illuminate\Support\Arr;

class TagAttributes
{
    public function __invoke(TagSerializer $serializer, Tag $tag): array
    {
        return [
            'fontColor' => $tag->font_color,
        ];
    }

    public static function handleTagEvent(&$event)
    {
        $attributes = (array)Arr::get($event->data, 'attributes');

        if (array_key_exists('fontColor', $attributes)) {
            $event->tag->font_color = $attributes['fontColor'];
        }
    }
}
