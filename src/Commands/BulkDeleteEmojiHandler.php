<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Commands;

use Flarum\Foundation\ValidationException;
use PianoTell\Flamoji\Models\Emoji;

class BulkDeleteEmojiHandler
{
    public function handle(BulkDeleteEmoji $command): int
    {
        $ids = $this->normalizeIds($command->emojiIds);

        if (empty($ids)) {
            throw new ValidationException([
                'ids' => 'Select at least one emoji.',
            ]);
        }

        return Emoji::query()->whereIn('id', $ids)->delete();
    }

    /**
     * @param array<int, mixed> $ids
     * @return array<int, int>
     */
    private function normalizeIds(array $ids): array
    {
        return array_values(array_unique(array_filter(array_map(function ($id) {
            if (is_int($id)) {
                return $id > 0 ? $id : null;
            }

            if (is_string($id) && ctype_digit($id)) {
                $normalized = (int) $id;
                return $normalized > 0 ? $normalized : null;
            }

            return null;
        }, $ids))));
    }
}
