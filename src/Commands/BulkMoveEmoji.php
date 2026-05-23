<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Commands;

class BulkMoveEmoji
{
    /**
     * @var array<int, mixed>
     */
    public $emojiIds;

    /**
     * @var mixed
     */
    public $typeId;

    /**
     * @param array<int, mixed> $emojiIds
     * @param mixed             $typeId
     */
    public function __construct(array $emojiIds, $typeId)
    {
        $this->emojiIds = $emojiIds;
        $this->typeId = $typeId;
    }
}
