<?php

use Flarum\Database\Migration;

return Migration::addColumns('tags', [
    'font_color' => ['string', 'length' => 50, 'nullable' => true]
]);
