(function(){"use strict";var e={55776:function(e,n,t){var o=t(29197),r=t(98473);function i(e,n,t,o,i,a){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u)}t(57658);var a={name:"App",mounted(){navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)&&this.$router.push({name:"mobile_home"})}},u=t(25312);const c=(0,u.Z)(a,[["render",i]]);var l=c,d=t(94731);const f=()=>Promise.all([t.e(343),t.e(773),t.e(702),t.e(911),t.e(39),t.e(759)]).then(t.bind(t,53336)),s=()=>Promise.all([t.e(343),t.e(773),t.e(911),t.e(926),t.e(436),t.e(757)]).then(t.bind(t,27925)),m=()=>Promise.all([t.e(343),t.e(773),t.e(702),t.e(911),t.e(926),t.e(354),t.e(79),t.e(436),t.e(912)]).then(t.bind(t,11974)),p=()=>Promise.all([t.e(343),t.e(773),t.e(702),t.e(911),t.e(354),t.e(39),t.e(827),t.e(31)]).then(t.bind(t,85547)),b=()=>Promise.all([t.e(343),t.e(911),t.e(485)]).then(t.bind(t,23900)),h=()=>Promise.all([t.e(343),t.e(773),t.e(615),t.e(386)]).then(t.bind(t,62531)),v=()=>Promise.all([t.e(343),t.e(773),t.e(926),t.e(615),t.e(741)]).then(t.bind(t,18129)),g=()=>Promise.all([t.e(343),t.e(773),t.e(702),t.e(354),t.e(615),t.e(39),t.e(827),t.e(431)]).then(t.bind(t,61911)),y=()=>Promise.all([t.e(343),t.e(702),t.e(926),t.e(354),t.e(615),t.e(79),t.e(323)]).then(t.bind(t,79134)),w=(0,d.r5)(),_=(0,d.p7)({history:w,routes:[{path:"/",name:"home",component:f,meta:{title:"domain-home"}},{path:"/cart",name:"cart",component:s,meta:{title:"domain-cart"}},{path:"/order",name:"order",component:m,meta:{title:"domain-order"}},{path:"/bsite",name:"bsite",component:b,meta:{title:"domain-bsite"}},{path:"/person",name:"person",component:p,meta:{title:"domain-person"}},{path:"/mobile_home",name:"mobile_home",component:h,meta:{title:"domain-mobile_home"}},{path:"/mobile_cart",name:"mobile_cart",component:v,meta:{title:"domain-mobile_cart"}},{path:"/mobile_order",name:"mobile_order",component:y,meta:{title:"domain-mobile_order"}},{path:"/mobile_person",name:"mobile_person",component:g,meta:{title:"domain-mobile_person"}}],scrollBehavior(e,n,t){return{x:0,y:0}}});var O=_,P=t(65633),S=t(55166),j=t(5374),B=t(9740),E=t(99899),k=t(78658),N=t(9051),x=(t(5110),t(28578));let C=(0,o.ri)(l);C.use(x.Z),C.use(O),C.use(S.gb),C.use(j.zx),C.use(B.Vb),C.use(E.OK),C.use(k.mQ),C.use(N.vF),C.config.globalProperties.$axios=P.Z,navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?(function(){var e=100/750,n=window.innerWidth,t=n*e;document.getElementsByTagName("html")[0].style.fontSize=t+"px"}(),window.onresize=function(){(function(){var e=100/750,n=window.innerWidth,t=n*e;document.getElementsByTagName("html")[0].style.fontSize=t+"px"})()}):(function(){var e=100/1920,n=window.innerWidth,t=n*e;document.getElementsByTagName("html")[0].style.fontSize=t+"px"}(),window.onresize=function(){(function(){var e=100/1920,n=window.innerWidth,t=n*e;document.getElementsByTagName("html")[0].style.fontSize=t+"px"})()}),C.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);t.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},t.d(i,a),i}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{31:"72f5eb57",39:"c45f6b3c",79:"13c559b7",323:"73c67cd7",343:"fc8dd401",354:"9a5c590c",386:"fcd5e1f8",431:"8275a390",436:"fe7a8d08",485:"075023b3",615:"1bca6afc",702:"9d8e9369",741:"cc24859e",757:"e108bbb9",759:"e05d6860",773:"d6821eb0",827:"73698cbb",911:"08dc13b2",912:"a971a11c",926:"b81e9b89"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{31:"d9d43a3b",323:"f44f20ce",386:"3f08d157",431:"7064cb56",485:"63c82af0",741:"adb84aa3",757:"a94c664b",759:"b62b1ce8",912:"f1e816ef"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="new_btcdomain_vue3:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={31:1,323:1,386:1,431:1,485:1,741:1,757:1,759:1,912:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var d=c(t)}for(n&&n(o);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunknew_btcdomain_vue3"]=self["webpackChunknew_btcdomain_vue3"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(55776)}));o=t.O(o)})();
//# sourceMappingURL=app.65cddd97.js.map