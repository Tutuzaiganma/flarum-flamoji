<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('custom_emojis_type') && ! $schema->hasColumn('custom_emojis_type', 'is_hidden')) {
            $schema->table(
                'custom_emojis_type',
                function (Blueprint $table) {
                    $table->boolean('is_hidden')->default(false)->after('path');
                }
            );
        }
    },
    'down' => function (Builder $schema) {
        if ($schema->hasTable('custom_emojis_type') && $schema->hasColumn('custom_emojis_type', 'is_hidden')) {
            $schema->table(
                'custom_emojis_type',
                function (Blueprint $table) {
                    $table->dropColumn('is_hidden');
                }
            );
        }
    },
];
