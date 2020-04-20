// ==UserScript==
// @name        remove-youtube-hover-overlays
// @namespace   yameholo
// @description YouTubeのhover-overlaysを消す
// @match       https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
    var elms = document.querySelectorAll("[id='hover-overlays']");
    for(var i = 0; i < elms.length; i++){
      elms[i].style.display='none';
    }
})();