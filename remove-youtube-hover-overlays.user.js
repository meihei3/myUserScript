// ==UserScript==
// @name        remove-youtube-hover-overlays
// @namespace   yameholo
// @description YouTubeのhover-overlaysを消す
// @match       https://www.youtube.com/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('div#hover-overlays {display: none !important; }');
