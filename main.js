!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);var o=0;let r=document.getElementsByClassName("luckying")[0],i=document.getElementsByClassName("bg")[0],s=document.getElementsByClassName("winDown")[0],a=document.getElementsByClassName("shadow")[0],l=document.getElementsByClassName("falses")[0];const c=()=>{let n=10*Math.random();setTimeout(()=>{n>=5?a.style.display="block":l.style.display="block",r.style.display="none",i.style.display="block",s.style.display="block"},2e3)};if(document.body.onclick=function(){0==o&&(o=1,b())},s.onclick=(n=>{n.stopPropagation(),a.style.display="none",l.style.display="none",s.style.display="none",i.style.display="block",o=0}),window.DeviceMotionEvent){var u=0,f=0,d=0,p=0,m=0,h=0;window.addEventListener("devicemotion",function(){var n=event.accelerationIncludingGravity;p=n.x,m=n.y,h=n.z,(Math.abs(p-d)>15||Math.abs(m-f)>15||Math.abs(h-u)>25)&&0==o&&(o=1,b()),d=p,f=m,u=h},!1)}else console.log("您的设备不支持重力感应事件！");function b(){i.style.display="none",r.style.display="block",c()}},function(n,t,e){var o=e(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(4)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(3)(!1)).push([n.i,"\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n \nbody{\n   width: 100%;\n   height: 100%; \n   background: #D01517;\n   overflow: hidden;\n}\n\n.bg {\n    width: 100%;\n    position: relative;\n}\n.bg img{\n    width: 100%;\n}\n.participate{\nwidth: 100%;\ntext-align: center;\nfont-size: 0.34rem;\ncolor: #FACC26;\nposition: absolute;\nbottom: 1.38rem;\n}\n.participate span{\n    color: white;\n    font-size: 0.5rem;\n}\n.luckyNumber{\n    width: 100%;\n    color: #fff;\n    font-size: 0.34rem;\n    text-align: center;\n    position: absolute;\n    bottom: 0.8rem;\n}\n.luckyNumber span{\n    color: #FACC26;\n}\n.decoration{\n    width: 1.6rem;\n    height: 0.98rem;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n}\n.decoration img{\n    width: 100%;\n}\n.luckying{\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: none;\n}\n.luckying img{\n    width: 100%;\n}\n.falseing{\n    width: 4.7rem;\n    height: 4.7rem;\n    position: absolute;\n    top: 1.5rem;\n    left: 1.9rem;\n}\n.again{\n    position: absolute;\n    left:1.14rem;\n    top: 7.1rem;\n    width:5.25rem;\n    height:0.91rem;\n    background:rgba(214,71,52,1);\n    border-radius:0.2rem;\n    font-size:0.46rem;\n    font-family:MicrosoftYaHei;\n    font-weight:400;\n    color:rgba(252,249,249,1);\n}\n.shopping{\n    position: absolute;\n    left:1.14rem;\n    top: 8.54rem;\n    width:5.25rem;\n    height:0.91rem;\n    background:rgba(214,71,52,1);\n    border-radius:0.2rem;\n    font-size:0.46rem;\n    font-family:MicrosoftYaHei;\n    font-weight:400;\n    color:rgba(252,249,249,1);\n}\n.falses{\n    width: 100%;\n    height: 100%;\n    background: #000;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background:rgba(0,0,0,0.72);\n    display: none;\n}\n.shadow{\n    width: 100%;\n    height: 100%;\n    background: #000;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background:rgba(0,0,0,0.72);\n    display: none;\n}\n\n.winning{\n    display: none;\n    width: 100%;\n    height: 100%;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    position: relative;\n}\n.imgbox{\n    width: 6rem;\n    height: 9rem;\n    z-index: 100;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    position: relative;\n}\n.imgbox img{\n    width: 100%;\n    height: 100%;\n}\n.num{\n    display: inline;\n    position: absolute;\n    top: 1.78rem;\n    left: 1.58rem;\n    font-size: 2.34rem;\n    font-weight:400;\n    color:rgba(229,76,63,1);\n    line-height:1.18rem;\n    font-family:Impact;\n}\n.unit{\n    width:0.78rem;\n    height:0.84rem;\n    background:rgba(229,76,63,1);\n    border-radius:50%;\n    position: absolute;\n    top: 2.45rem;\n    left: 4rem;\n    font-family:MicrosoftYaHei;\n    font-weight:400;\n    font-size: 0.56rem;\n    text-align: center;\n    color: #fff;\n}\n.receive{\n    position: absolute;\n    top: 6.36rem;\n    left: 0.76rem;\n    width:4.51rem;\n    height:1.32rem;\n    background:#FFDC7B;\n    border-radius:2rem;\n    color: #DF2718;\n    font-size:0.72rem;\n    font-family:FZLTCHK--GBK1-0;\n    font-weight:400;\n    text-align: center;\n    line-height: 1.32rem;\n}\n.winDown{\n    width: 0.78rem;\n    height: 0.78rem;\n    position: absolute;\n    top: 0.54rem;\n    right: 0.36rem;\n    display: none;\n}\n.winDown img{\n    width: 100%;\n    height: 100%;\n}\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),l=null,c=0,u=[],f=e(5);function d(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(y(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):e.push(o[s]={id:s,parts:[a]})}return e}function m(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertAt.before,e);e.insertBefore(t,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return g(t,n.attrs),m(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function y(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var s=c++;e=l||(l=b(t)),o=x.bind(null,e,s,!1),r=x.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(t,n.attrs),m(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,t),r=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){h(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return d(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var s=e[r];(a=i[s.id]).refs--,o.push(a)}n&&d(p(n,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var v,w=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function x(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);