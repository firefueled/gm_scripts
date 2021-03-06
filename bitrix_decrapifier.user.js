// ==UserScript==
// @name        Bitrix decrapifier
// @namespace   com.firefueled.biitrixdecrapifier
// @include     https://*.bitrix24*/*
// @version     6
// @grant       GM_addStyle
// @downloadURL https://github.com/firefueled/gm_scripts/raw/master/bitrix_decrapifier.user.js
// ==/UserScript==

var styles = " \
.bx-layout-inner-left { \
  padding: 0; \
  width: 0; \
} \
 \
.bx-layout-inner-left, #bx-im-bar { \
  visibility: collapse; \
} \
 \
.bx-layout-inner-table { \
    padding-left: 3em; \
    padding-right: 3em; \
} \
 \
table.bx-layout-inner-inner-table td.bx-layout-inner-inner-cont { \
  padding: 0; \
} \
 \
td.bx-layout-inner-inner-cont { \
  padding: 0; \
} \
 \
#bx-help-start.bx-help-start { \
  visibility: hidden; \
} \
 \
div.user-block { \
  width: auto; \
} \
 \
a.upgrade-btn.upgrade-btn-en { \
  visibility: hidden; \
} \
 \
div#header-inner { \
  padding-right: 128px; \
} \
 \
.timeman-expired #timeman-background { \
    background-color: transparent; \
    border-color: transparent; \
}";

GM_addStyle(styles);
