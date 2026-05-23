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

class ImportEmojiHandler
{
    public function handle(ImportEmoji $command): void
    {
        // Validate every row up-front before persisting any of them.
        // Without this, a malformed bulk import could land rows with empty
        // path/text_to_replace into the table, which the text formatter
        // would then iterate over and choke on. Rules live in EmojiRules
        // so single-create / edit / import stay in lockstep.
        $errors = [];
        $normalized = [];
        foreach ($command->data as $i => $emojiData) {
            try {
                $normalized[$i] = EmojiRules::validateCreate(
                    is_array($emojiData) ? $emojiData : [],
                    "data.$i."
                );
            } catch (ValidationException $e) {
                $errors = array_merge($errors, $e->getAttributes());
            }

            if (isset($normalized[$i]) && ($normalized[$i]['type_id'] === null || ! EmojiType::query()->whereKey($normalized[$i]['type_id'])->exists())) {
                $errors["data.$i.type_id"] = 'The selected category does not exist.';
            }
        }
        if (! empty($errors)) {
            throw new ValidationException($errors);
        }

        $sortCounters = [];

        foreach ($normalized as $row) {
            $typeId = $row['type_id'];
            if (! array_key_exists($typeId, $sortCounters)) {
                $sortCounters[$typeId] = $this->nextSortForType($typeId);
            }

            $sort = $row['sort'];
            if ($sort === null) {
                $sort = $sortCounters[$typeId];
                $sortCounters[$typeId]++;
            } else {
                $sortCounters[$typeId] = max($sortCounters[$typeId], $sort + 1);
            }

            $emoji = Emoji::build($row['title'], $row['text_to_replace'], $row['path'], $typeId, $sort);
            $emoji->save();
        }
    }

    private function nextSortForType(int $typeId): int
    {
        return (int) Emoji::query()->where('type_id', $typeId)->max('sort') + 1;
    }
}
