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
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ReorderEmojiTypesController implements RequestHandlerInterface
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

        if (empty($ids)) {
            throw new ValidationException([
                'ids' => 'Select at least one category.',
            ]);
        }

        $existingIds = EmojiType::query()->whereIn('id', $ids)->pluck('id')->map(function ($id) {
            return (int) $id;
        })->all();

        if (count($existingIds) !== count($ids)) {
            throw new ValidationException([
                'ids' => 'One or more categories do not exist.',
            ]);
        }

        EmojiType::query()
            ->whereIn('id', $ids)
            ->update([
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
