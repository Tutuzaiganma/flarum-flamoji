<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Controllers;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Foundation\ValidationException;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use PianoTell\Flamoji\Api\Serializers\EmojiTypeSerializer;
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateEmojiTypeController extends AbstractCreateController
{
    public $serializer = EmojiTypeSerializer::class;

    /**
     * @param ServerRequestInterface $request
     * @param Document               $document
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $title = trim((string) Arr::get($attributes, 'title', ''));
        $path = trim((string) Arr::get($attributes, 'path', ''));

        if ($title === '') {
            throw new ValidationException(['title' => 'The category title is required.']);
        }

        $requestedSort = $this->normalizeSort(Arr::get($attributes, 'sort'));
        $sort = $requestedSort ?? ((int) EmojiType::query()->max('sort') + 1);

        $type = EmojiType::build($title, $path, $sort);
        $type->save();

        return $type;
    }

    /**
     * @param mixed $value
     */
    private function normalizeSort($value): ?int
    {
        if ($value === null || $value === '') {
            return null;
        }

        if (is_int($value)) {
            return max(0, $value);
        }

        if (is_string($value) && ctype_digit($value)) {
            return max(0, (int) $value);
        }

        return null;
    }
}
