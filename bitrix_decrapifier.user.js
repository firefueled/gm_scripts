// ==UserScript==
// @name        Bitrix decrapifier
// @namespace   com.firefueled.biitrixdecrapifier
// @include     https://*.bitrix24*/*
// @version     1
// @grant       none
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
";

function addGlobalStyle(css) {
  try {
    var elmHead, elmStyle;
    elmHead = document.getElementsByTagName('head')[0];
    elmStyle = document.createElement('style');
    elmStyle.type = 'text/css';
    elmHead.appendChild(elmStyle);
    elmStyle.innerHTML = css;
  } catch (e) {
    if (!document.styleSheets.length) {
      document.createStyleSheet();
    }
    document.styleSheets[0].cssText += css;
  }
}

addGlobalStyle(styles);

// go go greasy fork!
