<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use PianoTell\Flamoji\Models\EmojiType;

class EmojiTypeSerializer extends AbstractSerializer
{
    protected $type = 'emoji-types';

    /**
     * @param EmojiType $model
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        return [
            'sort' => $model->sort,
            'title' => $model->title,
            'path' => $model->path,
            'isHidden' => (bool) $model->is_hidden,
        ];
    }
}
