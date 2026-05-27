<?php
/*
 * This file is part of Flamoji.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace PianoTell\Flamoji;

use Flarum\Http\UrlGenerator;
use PianoTell\Flamoji\Models\Emoji;
use s9e\TextFormatter\Configurator;

class ConfigureTextFormatter
{
    protected UrlGenerator $url;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    /**
     * Configure s9e/TextFormatter
     *
     * @param Configurator $config
     */
    public function __invoke(Configurator $config)
    {
        $customEmojis = Emoji::all();

        foreach ($customEmojis as $emoji) {
            $path = $emoji->path;

            // check if the path starts with http:// or https://
            // We're using a similar thing on the urlChecker.js
            if (!preg_match('/http(s?)\:\/\//i', $path)) {
                $path = $this->url->to('forum')->base() . $path;
            }

            $template = '
                    <span class="flamoji">
                        <img src="' . htmlspecialchars($path, ENT_QUOTES | ENT_HTML5, 'UTF-8') . '" alt="' . htmlspecialchars((string) $emoji->title, ENT_QUOTES | ENT_HTML5, 'UTF-8') . '" />
                    </span>
                ';

            $config->Emoticons->add($emoji->text_to_replace, $template);

            // The Emoticons plugin's PHP regexp is not always compiled in
            // Unicode mode, which can miss some Chinese bracket shortcodes
            // when posts are saved. Add an exact /u matcher that creates the
            // same <E> tag while keeping Emoticons as the renderer mapping for
            // old posts that already contain <E>[shortcode]</E>.
            $config->Preg->match(
                '/' . preg_quote($emoji->text_to_replace, '/') . '/u',
                'E'
            );
        }
    }
}
