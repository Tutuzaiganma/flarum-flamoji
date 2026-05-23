<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Models;

use Flarum\Database\AbstractModel;

/**
 * @property int    $id
 * @property int    $sort
 * @property string $title
 * @property string $path
 * @property bool   $is_hidden
 */
class EmojiType extends AbstractModel
{
    protected $table = 'custom_emojis_type';

    public static function build(string $title, string $path = '', int $sort = 0): self
    {
        $type = new self;
        $type->title = $title;
        $type->path = $path;
        $type->sort = max(0, $sort);

        return $type;
    }
}
