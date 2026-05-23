<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Foundation\ValidationException;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use PianoTell\Flamoji\Api\Serializers\EmojiTypeSerializer;
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateEmojiTypeController extends AbstractShowController
{
    public $serializer = EmojiTypeSerializer::class;

    /**
     * @param ServerRequestInterface $request
     * @param Document               $document
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');
        $attributes = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $type = EmojiType::query()->findOrFail($id);

        if (array_key_exists('title', $attributes)) {
            $title = trim((string) $attributes['title']);

            if ($title === '') {
                throw new ValidationException(['title' => 'The category title is required.']);
            }

            $type->title = $title;
        }

        if (array_key_exists('path', $attributes)) {
            $type->path = trim((string) $attributes['path']);
        }

        if (array_key_exists('sort', $attributes)) {
            $type->sort = $this->normalizeSort($attributes['sort']);
        }

        if (array_key_exists('isHidden', $attributes)) {
            $type->is_hidden = (bool) $attributes['isHidden'];
        }

        $type->save();

        return $type;
    }

    /**
     * @param mixed $value
     */
    private function normalizeSort($value): int
    {
        if (is_int($value)) {
            return max(0, $value);
        }

        if (is_string($value) && ctype_digit($value)) {
            return max(0, (int) $value);
        }

        return 0;
    }
}
