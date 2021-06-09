(()=>{"use strict";var e,r,n={579:(e,r,n)=>{n(536)},626:(e,r,n)=>{n.r(r),n.d(r,{default:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,"*{margin:0;padding:0}html,body{min-height:100%;height:100%;min-width:100%;background-color:#000;overflow:hidden}body{position:fixed;font-family:'PT Sans Narrow',Helvetica,Arial,Verdana,sans-serif;visibility:visible;top:0;right:0;left:0;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#bg-fullscreen{position:absolute;-moz-opacity:0;opacity:1;top:0;left:0;width:100%;height:100%;background-image:url(\"https://loremflickr.com/800/600/teddybear\");background-size:cover;background-position:50% 50%;-webkit-animation:op 4s ease-in-out;animation:op 4s ease-in-out;-webkit-filter:blur(3px);-moz-filter:blur(3px);-o-filter:blur(3px);-ms-filter:blur(3px);filter:blur(3px)}@-webkit-keyframes op{from{opacity:0}}@keyframes op{from{opacity:0}}h1{font-size:20em;text-shadow:0px 0px 42px #000;position:relative;-moz-opacity:0.9;opacity:0.9;color:#fff;-webkit-animation:op 8s step-end;animation:op 8s step-end}@media only screen and (max-width: 1280px){h1{font-size:13em}}@media only screen and (max-width: 479px){h1{font-size:10em}}\n",""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);t&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),r.push(d))}},r}},536:(e,r,n)=>{var t=n(379),o=n.n(t),i=n(626),a=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||e.hot.invalidate){var c=i.default.locals;e.hot.accept(626,(r=>{i=n(626),function(e,r,n){if(!e&&r||e&&!r)return!1;var t;for(t in e)if(e[t]!==r[t])return!1;for(t in r)if(!e[t])return!1;return!0}(c,i.default.locals)?(c=i.default.locals,a(i.default)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i.default.locals},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function a(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function c(e,r){for(var n={},t=[],o=0;o<e.length;o++){var c=e[o],d=r.base?c[0]+r.base:c[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:m(f,r),references:1}),t.push(s)}return t}function d(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,s=(l=[],function(e,r){return l[e]=r,l.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=s(r,o);else{var i=document.createTextNode(o),a=e.childNodes;a[r]&&e.removeChild(a[r]),a.length?e.insertBefore(i,a[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,h=0;function m(e,r){var n,t,o;if(r.singleton){var i=h++;n=p||(p=d(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=c(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=a(n[t]);i[o].references--}for(var d=c(e,r),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=d}}}}},t={};function o(e){var r=t[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:n[e],require:o};o.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}o.m=n,o.c=t,o.i=[],o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"d79839f6c4e39decde0e",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="pic:",o.l=(n,t,i,a)=>{if(e[n])e[n].push(t);else{var c,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var u=l[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+i){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",r+i),c.src=n),e[n]=[t];var f=(r,t)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t,i={},a=o.c,c=[],d=[],l="idle";function s(e){l=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return s("check"),o.hmrM().then((function(t){if(!t)return s(m()?"ready":"idle"),null;s("prepare");var i=[];return r=[],n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,r){return o.hmrC[r](t.c,t.r,t.m,e,n,i),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),i)}))}))}))}function p(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var a=function(e){o||(o=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(c))}function m(){if(t)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){t.forEach((function(r){o.hmrI[e](r,n)}))})),t=void 0,!0}o.hmrD=i,o.i.push((function(h){var m,v,y,b,g=h.module,w=function(n,t){var o=a[t];if(!o)return n;var i=function(r){if(o.hot.active){if(a[r]){var i=a[r].parents;-1===i.indexOf(t)&&i.push(t)}else c=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),c=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,d(f));return i.e=function(e){return function(e){switch(l){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);g.hot=(m=h.id,v=g,b={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){c=v.parents.slice(),e=y?void 0:m,o(m)},active:!0,accept:function(e,r,n){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)b._acceptedDependencies[e[t]]=r||function(){},b._acceptedErrorHandlers[e[t]]=n;else b._acceptedDependencies[e]=r||function(){},b._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)b._declinedDependencies[e[r]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=b._disposeHandlers.indexOf(e);r>=0&&b._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,n)})),s("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return l;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:i[m]},e=void 0,b),g.parents=c,g.children=[],c=[],h.require=w})),o.hmrC={},o.hmrI={}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e,r,n,t,i={179:0},a={};function c(e){return new Promise(((r,n)=>{a[e]=r;var t=o.p+o.hu(e),i=new Error;o.l(t,(r=>{if(a[e]){a[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,n(i)}}))}))}function d(a){function c(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var i=t.pop(),a=i.id,c=i.chain,l=o.c[a];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],f=o.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),d(n[u],[a])):(delete n[u],r.push(u),t.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function d(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,e=void 0;var l={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(o.o(r,p)){var h,m=r[p],v=!1,y=!1,b=!1,g="";switch((h=m?c(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(h),a.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(h),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in u[p]=m,d(s,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,p)&&(l[p]||(l[p]=[]),d(l[p],h.outdatedDependencies[p]));b&&(d(s,[h.moduleId]),u[p]=f)}r=void 0;for(var w,E=[],x=0;x<s.length;x++){var k=s[x],_=o.c[k];_&&(_.hot._selfAccepted||_.hot._main)&&u[k]!==f&&!_.hot._selfInvalidated&&E.push({module:k,require:_.hot._requireSelf,errorHandler:_.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var a=t.pop(),c=o.c[a];if(c){var d={},u=c.hot._disposeHandlers;for(x=0;x<u.length;x++)u[x].call(null,d);for(o.hmrD[a]=d,c.hot.active=!1,delete o.c[a],delete l[a],x=0;x<c.children.length;x++){var f=o.c[c.children[x]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in l)if(o.o(l,p)&&(c=o.c[p]))for(w=l[p],x=0;x<w.length;x++)r=w[x],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](o);for(var i in l)if(o.o(l,i)){var c=o.c[i];if(c){w=l[i];for(var d=[],f=[],p=[],h=0;h<w.length;h++){var m=w[h],v=c.hot._acceptedDependencies[m],y=c.hot._acceptedErrorHandlers[m];if(v){if(-1!==d.indexOf(v))continue;d.push(v),f.push(y),p.push(m)}}for(var b=0;b<d.length;b++)try{d[b].call(null,w)}catch(r){if("function"==typeof f[b])try{f[b](r,{moduleId:i,dependencyId:p[b]})}catch(n){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[b],error:n,originalError:r}),a.ignoreErrored||(e(n),e(r))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[b],error:r}),a.ignoreErrored||e(r)}}}for(var g=0;g<E.length;g++){var x=E[g],k=x.module;try{x.require(k)}catch(r){if("function"==typeof x.errorHandler)try{x.errorHandler(r,{moduleId:k,module:o.c[k]})}catch(n){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),a.ignoreErrored||(e(n),e(r))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:k,error:r}),a.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdatepic=(e,n,i)=>{for(var c in n)o.o(n,c)&&(r[c]=n[c]);i&&t.push(i),a[e]&&(a[e](),a[e]=void 0)},o.hmrI.jsonp=function(e,i){r||(r={},t=[],n=[],i.push(d)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(a,l,s,u,f,p){f.push(d),e={},n=l,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],a.forEach((function(r){o.o(i,r)&&void 0!==i[r]&&(u.push(c(r)),e[r]=!0)})),o.f&&(o.f.jsonpHmr=function(r,n){e&&!o.o(e,r)&&o.o(i,r)&&void 0!==i[r]&&(n.push(c(r)),e[r]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),o(579)})();