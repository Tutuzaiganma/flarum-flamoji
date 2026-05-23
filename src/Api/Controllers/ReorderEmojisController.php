<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Controllers;

use Flarum\Foundation\ValidationException;
use Flarum\Http\RequestUtil;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\EmptyResponse;
use PianoTell\Flamoji\Commands\EmojiRules;
use PianoTell\Flamoji\Models\Emoji;
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ReorderEmojisController implements RequestHandlerInterface
{
    /**
     * @var ConnectionInterface
     */
    protected $db;

    public function __construct(ConnectionInterface $db)
    {
        $this->db = $db;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        RequestUtil::getActor($request)->assertAdmin();

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $rawIds = Arr::get($attributes, 'ids', []);
        $ids = $this->normalizeIds(is_array($rawIds) ? $rawIds : []);
        $typeId = EmojiRules::normalizeTypeId(Arr::get($attributes, 'typeId'));

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

        $query = Emoji::query()->whereIn('id', $ids)->where('type_id', $typeId);

        $existingIds = $query->pluck('id')->map(function ($id) {
            return (int) $id;
        })->all();

        if (count($existingIds) !== count($ids)) {
            throw new ValidationException([
                'ids' => 'One or more emojis do not belong to the selected category.',
            ]);
        }

        $updateQuery = Emoji::query()->whereIn('id', $ids)->where('type_id', $typeId);

        $updateQuery->update([
            'sort' => $this->db->raw($this->caseSql($ids)),
        ]);

        return new EmptyResponse(204);
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
     * @param array<int, int> $ids
     */
    private function caseSql(array $ids): string
    {
        $cases = array_map(function (int $id, int $index) {
            return sprintf('WHEN %d THEN %d', $id, $index + 1);
        }, $ids, array_keys($ids));

        return sprintf('CASE id %s ELSE sort END', implode(' ', $cases));
    }
}
