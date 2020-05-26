<?php

/*
 * This file is part of askvortsov/flarum-categories
 *
 *  Copyright (c) 2020 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumCategories\Console;

use Flarum\Console\AbstractCommand;
use Illuminate\Contracts\Container\Container;
use Illuminate\Database\ConnectionInterface;

class RecalculateTagStats extends AbstractCommand
{
    protected $container;
    protected $database;

    public function __construct(Container $container, ConnectionInterface $database)
    {
        parent::__construct();
        $this->container = $container;
        $this->database = $database;
    }

    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('tags:recalculate_stats')
            ->setDescription('Recalculate stats and last posted discussion for all categories.');
    }

    /**
     * {@inheritdoc}
     */
    protected function fire()
    {
        $this->info('Starting...');

        $config = $this->container->make('flarum.config');

        $prefix = $config['database']['prefix'];

        $query = file_get_contents(dirname(__FILE__, 3).'/sql/update_all_data.sql');

        $query = str_replace('[PREFIX]', $prefix, $query);

        $result = $this->database->getPdo()->exec($query);

        echo json_encode($result);
    }
}
