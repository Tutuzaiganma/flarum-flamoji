<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use PianoTell\Flamoji\Api\Serializers\EmojiTypeSerializer;
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListEmojiTypesController extends AbstractListController
{
    public $serializer = EmojiTypeSerializer::class;

    /**
     * @param ServerRequestInterface $request
     * @param Document               $document
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $params = $request->getQueryParams();
        $visibleOnly = (bool) Arr::get($params, 'filter.visible');

        if (! $visibleOnly) {
            $actor->assertAdmin();
        }

        $query = EmojiType::query()->orderBy('sort')->orderBy('id');

        if ($visibleOnly || ! $actor->isAdmin()) {
            $query->where('is_hidden', false);
        }

        return $query->get();
    }
}
