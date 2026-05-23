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
use PianoTell\Flamoji\Models\EmojiType;

class BulkMoveEmojiHandler
{
    public function handle(BulkMoveEmoji $command): int
    {
        $ids = $this->normalizeIds($command->emojiIds);
        $typeId = EmojiRules::normalizeTypeId($command->typeId);

        if (empty($ids)) {
            throw new ValidationException([
                'ids' => 'Select at least one emoji.',
            ]);
        }

        if ($typeId === null || ! EmojiType::query()->whereKey($typeId)->exists()) {
            throw new ValidationException([
                'typeId' => 'The selected category does not exist.',
            ]);
        }

        $nextSort = $this->nextSortForType($typeId, $ids);
        $updated = 0;

        foreach ($ids as $id) {
            $updated += Emoji::query()->whereKey($id)->update([
                'type_id' => $typeId,
                'sort' => $nextSort++,
            ]);
        }

        return $updated;
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

    /**
     * @param array<int, int> $movingIds
     */
    private function nextSortForType(int $typeId, array $movingIds): int
    {
        $query = Emoji::query()->whereNotIn('id', $movingIds)->where('type_id', $typeId);

        return (int) $query->max('sort') + 1;
    }
}
