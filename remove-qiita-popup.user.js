// ==UserScript==
// @name        remove-qiita-popup
// @namespace   yameholo
// @description Qiitaのユーザー登録のポップアップを消す
// @match       https://qiita.com/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle('.st-Modal.is-open {display: none !important; }');
