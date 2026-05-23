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

class CreateEmojiHandler
{
    public function handle(CreateEmoji $command): Emoji
    {
        $attrs = EmojiRules::validateCreate(Arr::get($command->data, 'attributes', []));

        if ($attrs['type_id'] === null || ! EmojiType::query()->whereKey($attrs['type_id'])->exists()) {
            throw new ValidationException(['type_id' => 'The selected category does not exist.']);
        }

        $sort = $attrs['sort'] ?? $this->nextSortForType($attrs['type_id']);
        $emoji = Emoji::build($attrs['title'], $attrs['text_to_replace'], $attrs['path'], $attrs['type_id'], $sort);

        $emoji->save();

        return $emoji;
    }

    private function nextSortForType(int $typeId): int
    {
        return (int) Emoji::query()->where('type_id', $typeId)->max('sort') + 1;
    }
}
