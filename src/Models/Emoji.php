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
 * @property int         $id
 * @property int|null    $type_id
 * @property int         $sort
 * @property string|null $title
 * @property string|null $text_to_replace
 * @property string      $path
 */
class Emoji extends AbstractModel
{
    protected $table = 'custom_emojis';

    /**
     * Create a new emoji.
     *
     * @param  string   $title
     * @param  string   $textToReplace
     * @param  string   $path
     * @param  int|null $typeId
     * @param  int      $sort
     * @return static
     */
    public static function build($title, $textToReplace, $path, $typeId = null, $sort = 0)
    {
        $emoji = new static;

        $emoji->title = $title;
        $emoji->text_to_replace = $textToReplace;
        $emoji->path = $path;
        $emoji->type_id = $typeId;
        $emoji->sort = max(0, (int) $sort);

        return $emoji;
    }
}
