<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (! $schema->hasTable('custom_emojis_type')) {
            $schema->create(
                'custom_emojis_type',
                function (Blueprint $table) {
                    $table->increments('id');
                    $table->unsignedInteger('sort')->default(0);
                    $table->string('title');
                    $table->string('path');
                }
            );
        }

        if ($schema->hasTable('custom_emojis') && ! $schema->hasColumn('custom_emojis', 'type_id')) {
            $schema->table(
                'custom_emojis',
                function (Blueprint $table) {
                    $table->unsignedInteger('type_id')->nullable()->after('id');
                }
            );
        }

        if ($schema->hasTable('custom_emojis_type') && ! $schema->hasColumn('custom_emojis_type', 'sort')) {
            $schema->table(
                'custom_emojis_type',
                function (Blueprint $table) {
                    $table->unsignedInteger('sort')->default(0)->after('id');
                }
            );
        }

        if ($schema->hasTable('custom_emojis') && ! $schema->hasColumn('custom_emojis', 'sort')) {
            $schema->table(
                'custom_emojis',
                function (Blueprint $table) {
                    $table->unsignedInteger('sort')->default(0)->after('type_id');
                }
            );
        }
    },
    'down' => function (Builder $schema) {
        if ($schema->hasTable('custom_emojis') && $schema->hasColumn('custom_emojis', 'sort')) {
            $schema->table(
                'custom_emojis',
                function (Blueprint $table) {
                    $table->dropColumn('sort');
                }
            );
        }

        if ($schema->hasTable('custom_emojis') && $schema->hasColumn('custom_emojis', 'type_id')) {
            $schema->table(
                'custom_emojis',
                function (Blueprint $table) {
                    $table->dropColumn('type_id');
                }
            );
        }

        if ($schema->hasTable('custom_emojis_type') && $schema->hasColumn('custom_emojis_type', 'sort')) {
            $schema->table(
                'custom_emojis_type',
                function (Blueprint $table) {
                    $table->dropColumn('sort');
                }
            );
        }

        $schema->dropIfExists('custom_emojis_type');
    },
];
