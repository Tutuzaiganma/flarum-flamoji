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
use Illuminate\Support\Arr;

class EditEmojiHandler
{
    public function handle(EditEmoji $command): Emoji
    {
        $emoji = Emoji::findOrFail($command->emojiId);
        $originalTypeId = $emoji->type_id;

        $attributes = Arr::get($command->data, 'attributes', []);
        $errors = [];

        if (array_key_exists('title', $attributes)) {
            $emoji->title = trim((string) $attributes['title']);
        }

        if (array_key_exists('textToReplace', $attributes)) {
            $textToReplace = trim((string) $attributes['textToReplace']);
            $err = EmojiRules::validateTextToReplace($textToReplace, true);
            if ($err !== null) {
                $errors['textToReplace'] = $err;
            } else {
                $emoji->text_to_replace = $textToReplace;
            }
        }

        if (array_key_exists('path', $attributes)) {
            $path = trim((string) $attributes['path']);
            $err = EmojiRules::validatePath($path, true);
            if ($err !== null) {
                $errors['path'] = $err;
            } else {
                $emoji->path = $path;
            }
        }

        if (array_key_exists('type_id', $attributes) || array_key_exists('typeId', $attributes)) {
            $typeId = EmojiRules::normalizeTypeId($attributes['type_id'] ?? $attributes['typeId']);

            if ($typeId === null || ! EmojiType::query()->whereKey($typeId)->exists()) {
                $errors['typeId'] = 'The selected category does not exist.';
            } else {
                $emoji->type_id = $typeId;
            }
        }

        if (array_key_exists('sort', $attributes)) {
            $emoji->sort = EmojiRules::normalizeSort($attributes['sort']) ?? 0;
        }

        if (! empty($errors)) {
            throw new ValidationException($errors);
        }

        if (! array_key_exists('sort', $attributes) && $emoji->type_id !== $originalTypeId) {
            $emoji->sort = $this->nextSortForType($emoji->type_id, (int) $emoji->id);
        }

        $emoji->save();

        return $emoji;
    }

    private function nextSortForType(int $typeId, int $excludeEmojiId = 0): int
    {
        $query = Emoji::query()->where('type_id', $typeId);

        if ($excludeEmojiId > 0) {
            $query->where('id', '!=', $excludeEmojiId);
        }

        return (int) $query->max('sort') + 1;
    }
}
