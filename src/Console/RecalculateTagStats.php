<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumCategories\Console;

use Flarum\Console\AbstractCommand;
use Illuminate\Database\ConnectionInterface;

class RecalculateTagStats extends AbstractCommand
{
    protected $database;

    public function __construct(ConnectionInterface $database)
    {
        parent::__construct();
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

        $query = file_get_contents(dirname(__FILE__, 3).'/sql/update_all_data.sql');

        $result = $this->database->getPdo()->exec($query);

        echo json_encode($result);
    }
}
