/*!

Support JS for legacy browsers.
Includes:

  HTML5 Shiv
    @afarkas @jdalton @jon_neal @rem
    MIT/GPL2 Licensed
    https://github.com/aFarkas/html5shiv

  matchMedia() polyfill
    (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license

  Respond.js
    min/max-width media query polyfill
    (c) Scott Jehl. MIT/GPLv2 Lic.
    http://j.mp/respondjs

*/
!function(e,t){function n(){var e=d.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=f[e[p]];return t||(t={},g++,e[p]=g,f[g]=t),t}function s(e,n,s){return n||(n=t),l?n.createElement(e):(s||(s=r(n)),n=s.cache[e]?s.cache[e].cloneNode():u.test(e)?(s.cache[e]=s.createElem(e)).cloneNode():s.createElem(e),n.canHaveChildren&&!h.test(e)?s.frag.appendChild(n):n)}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return d.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(d,t.frag)}function a(e){e||(e=t);var n=r(e);if(d.shivCSS&&!o&&!n.hasCSS){var s,a=e;s=a.createElement("p"),a=a.getElementsByTagName("head")[0]||a.documentElement,s.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",s=a.insertBefore(s.lastChild,a.firstChild),n.hasCSS=!!s}return l||i(e,n),e}var o,l,c=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();n=void 0===r.cloneNode||void 0===r.createDocumentFragment||void 0===r.createElement}l=n}catch(s){l=o=!0}}();var d={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:a,createElement:s,createDocumentFragment:function(e,s){if(e||(e=t),l)return e.createDocumentFragment();for(var s=s||r(e),i=s.frag.cloneNode(),a=0,o=n(),c=o.length;c>a;a++)i.createElement(o[a]);return i}};e.html5=d,a(t)}(this,document),/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,s=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,r),t=42===i.offsetWidth,n.removeChild(s),{matches:t,media:e}}}(document),/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
function(e){"use strict";function t(){k(!0)}var n={};if(e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,s,i,a=e.document,o=a.documentElement,l=[],c=[],h=[],u={},p=30,g=a.getElementsByTagName("head")[0]||o,f=a.getElementsByTagName("base")[0],d=g.getElementsByTagName("link"),m=[],b=function(){for(var t=0;t<d.length;t++){var n=d[t],r=n.href,s=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&i&&!u[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(y(n.styleSheet.rawCssText,r,s),u[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!f||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&m.push({href:r,media:s}))}v()},v=function(){if(m.length){var t=m.shift();S(t.href,function(n){y(n,t.href,t.media),u[t.href]=!0,e.setTimeout(function(){v()},0)})}},y=function(e,t,n){var r=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),s=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var i=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},a=!s&&n;t.length&&(t+="/"),a&&(s=1);for(var o=0;s>o;o++){var h,u,p,g;a?(h=n,c.push(i(e))):(h=r[o].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,c.push(RegExp.$2&&i(RegExp.$2))),p=h.split(","),g=p.length;for(var f=0;g>f;f++)u=p[f],l.push({media:u.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:c.length-1,hasquery:u.indexOf("(")>-1,minw:u.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:u.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}k()},x=function(){var e,t=a.createElement("div"),n=a.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=a.createElement("body"),n.style.background="none"),n.appendChild(t),o.insertBefore(n,o.firstChild),e=t.offsetWidth,r?o.removeChild(n):n.removeChild(t),e=i=parseFloat(e)},k=function(t){var n="clientWidth",u=o[n],f="CSS1Compat"===a.compatMode&&u||a.body[n]||u,m={},b=d[d.length-1],v=(new Date).getTime();if(t&&r&&p>v-r)return e.clearTimeout(s),void(s=e.setTimeout(k,p));r=v;for(var y in l)if(l.hasOwnProperty(y)){var S=l[y],w=S.minw,$=S.maxw,E=null===w,C=null===$,_="em";w&&(w=parseFloat(w)*(w.indexOf(_)>-1?i||x():1)),$&&($=parseFloat($)*($.indexOf(_)>-1?i||x():1)),S.hasquery&&(E&&C||!E&&w>f||!C&&f>$)||(m[S.media]||(m[S.media]=[]),m[S.media].push(c[S.rules]))}for(var A in h)h.hasOwnProperty(A)&&h[A]&&h[A].parentNode===g&&g.removeChild(h[A]);for(var T in m)if(m.hasOwnProperty(T)){var O=a.createElement("style"),F=m[T].join("\n");O.type="text/css",O.media=T,g.insertBefore(O,b.nextSibling),O.styleSheet?O.styleSheet.cssText=F:O.appendChild(a.createTextNode(F)),h.push(O)}},S=function(e,t){var n=w();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},w=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();b(),n.update=b,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);