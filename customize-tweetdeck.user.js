// ==UserScript==
// @name         customize-tweetdeck
// @namespace    yameholo
// @version      1.0
// @description  customize tweetdeck
// @match        https://tweetdeck.twitter.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const STYLE_CSS = '' +
    '.app-columns .column:first-of-type {font-size: 1.1rem !important; width: 480px !important;}' +
    '.app-columns .column:first-of-type .media-size-medium {height: 280px !important;}' +
    '.app-columns .column:first-of-type .icon {font-size: 25px !important;}' +
    '.app-columns .column:first-of-type .tweet > .tweet-header {padding-bottom:4px; border-bottom: solid 1px #8899A6;}' +
    '.app-columns .column:first-of-type .tweet > .tweet-header .username {font-size: 1rem;}' +
    '.icon {font-size: 21px !important;}' +
    '.tweet-footer {margin-top: 8px !important;}' +
    '.tweet-action-item {margin-left: 5px !important;}' +
    '.tweet-header {margin-bottom:2px;}' +
    '.app-columns-container {background-image: url(https://pbs.twimg.com/media/EXpFH6BU0AAEvF8?format=jpg&name=large); background-size: cover;}' +
    '.app-columns {opacity: .8;}';

    const f = () => {
        const style = document.createElement('style');
        document.head.appendChild(style);
        style.textContent = STYLE_CSS;
    };

    setTimeout(f, 1100);
})();