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

class Util
{
    /**
     * @param \Flarum\Post\Post $post
     * @param int               $delta
     */
    public static function updateTagsPostCount($post, $delta)
    {
        if (!$post) {
            return;
        }

        foreach ($post->discussion->tags as $tag) {
            // We do not count private discussions in tags
            if (!$post->is_private && !$post->discussion->is_private) {
                $tag->post_count += $delta;
            }

            $tag->save();
        }
    }
}
