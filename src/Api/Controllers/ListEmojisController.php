<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\UrlGenerator;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use PianoTell\Flamoji\Api\Serializers\EmojiSerializer;
use PianoTell\Flamoji\Models\Emoji;
use PianoTell\Flamoji\Models\EmojiType;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListEmojisController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = EmojiSerializer::class;

    public $sortFields = ['id', 'sort'];

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    /**
     * @param \Psr\Http\Message\ServerRequestInterface $request
     * @param \Tobscure\JsonApi\Document               $document
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $params = $request->getQueryParams();
        $typeIdFilter = Arr::get($params, 'filter.type_id');
        $visibleOnly = (bool) Arr::get($params, 'filter.visible');
        $query = Emoji::query()->orderBy('sort')->orderBy('id');

        if ($visibleOnly || ! $actor->isAdmin()) {
            $visibleTypeIds = EmojiType::query()->where('is_hidden', false)->select('id');

            $query->where(function ($query) use ($visibleTypeIds) {
                $query->whereNotNull('type_id')->whereIn('type_id', $visibleTypeIds);
            });
        }

        if ($typeIdFilter !== null && $typeIdFilter !== '') {
            $query->where('type_id', (int) $typeIdFilter);
        }

        // Escape hatch: ?filter[all]=1 returns the current query in one shot,
        // used by the forum picker and by the admin's "export to JSON" flow.
        // Forum-visible requests are already scoped to visible categories above.
        if (Arr::get($params, 'filter.all')) {
            return $query->get();
        }

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $results = $query->skip($offset)->take($limit + 1)->get();

        $hasMoreResults = $limit > 0 && $results->count() > $limit;

        if ($hasMoreResults) {
            $results->pop();
        }

        $document->addPaginationLinks(
            $this->url->to('api')->route('emojis.list'),
            $params,
            $offset,
            $limit,
            $hasMoreResults ? null : 0
        );

        return $results;
    }
}
