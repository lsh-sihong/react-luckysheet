module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-frame-component")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(3),n(1)),s=n.n(i);n(4),n(5);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t=e.id,n=e.style,s=e.refs,c={container:t,showinfobar:!1,lang:"zh"},a=Object(i.useFrame)(),l=a.document,f=a.window,p=u(u({},c),e.options);return Object(r.useEffect)((function(){if(!l.getElementById("pluginsCss")){var t=l.createElement("link");t.id="pluginsCss",t.rel="stylesheet",t.href="luckysheet/plugins/css/pluginsCss.css",l.body.appendChild(t)}if(!l.getElementById("plugins")){var n=l.createElement("link");n.id="plugins",n.rel="stylesheet",n.href="luckysheet/plugins/plugins.css",l.body.appendChild(n)}if(!l.getElementById("luckysheetCss")){var r=l.createElement("link");r.id="luckysheetCss",r.rel="stylesheet",r.href="luckysheet/css/luckysheet.css",l.body.appendChild(r)}if(!l.getElementById("iconfont")){var o=l.createElement("link");o.id="iconfont",o.rel="stylesheet",o.href="luckysheet/assets/iconfont/iconfont.css",l.body.appendChild(o)}if(!l.getElementById("pluginjs")){var i=l.createElement("script");i.id="pluginjs",i.src="luckysheet/plugins/js/plugin.js",i.async=!1,l.body.appendChild(i)}if(!l.getElementById("luckysheetjs")){var c=l.createElement("script");c.id="luckysheetjs",c.src="luckysheet/luckysheet.umd.js",c.async=!1,l.body.appendChild(c),c.onload=function(){s&&(s.current=f.luckysheet,s.current.create(p))}}e.options&&!e.options.allowCopy&&l.addEventListener("copy",(function(){var e=s.current.getRange();s.current.enterEditMode(),s.current.exitEditMode(),s.current.setRangeShow(e)}))}),[]),Object(r.useEffect)((function(){s&&s.current&&s.current.create(p)}),[e.options]),o.a.createElement("div",{id:t,style:n})},p=function(e){var t=e.style,n=e.refs,r=u(u({},{width:"100%",height:700}),t);return o.a.createElement(s.a,{style:r},o.a.createElement(f,c({},e,{style:r,refs:n})))};t.default=Object(r.forwardRef)((function(e,t){return o.a.createElement(p,c({},e,{refs:t}))}))},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("lodash")},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};n(8)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".slide-verify {\n  position: relative;\n}\n.slide-verify * {\n  box-sizing: border-box;\n}\n.slide-verify .nc_scale {\n  border: 1px solid #e8e8e8;\n  overflow: hidden;\n}\n.slide-verify .nc_iconfont {\n  border: none !important;\n}\n.slide-verify .nc_iconfont,\n.slide-verify .nc-lang-cnt {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.slide-verify .nc_iconfont,\n.slide-verify .nc_1_nocaptcha,\n.slide-verify .sm-pop-inner,\n.slide-verify .nc_scale,\n.slide-verify .nc_wrapper,\n.slide-verify .nc-lang-cnt {\n  height: 100% !important;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}((function(e){return document.querySelector(e)})),a=null,u=0,l=[],f=n(9);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(m(r.parts[s],t))}else{var c=[];for(s=0;s<r.parts.length;s++)c.push(m(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}function y(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");return e.attrs.type="text/css",b(t,e.attrs),y(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=a||(a=v(t)),r=O.bind(null,n,s,!1),o=O.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",b(t,e.attrs),y(e,t),t}(t),r=x.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=w.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(c=i[s.id]).refs--,r.push(c)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var g,j=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function O(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function x(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);