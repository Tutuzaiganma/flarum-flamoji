<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Commands;

class BulkDeleteEmoji
{
    /**
     * @var array<int, mixed>
     */
    public $emojiIds;

    /**
     * @param array<int, mixed> $emojiIds
     */
    public function __construct(array $emojiIds)
    {
        $this->emojiIds = $emojiIds;
    }
}
