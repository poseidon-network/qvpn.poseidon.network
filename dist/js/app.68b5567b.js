(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dde7fdf6"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"b5ae4d59"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1877:function(t,e,n){t.exports=n.p+"img/blob-g.648d95a1.svg"},"31f1":function(t,e,n){},"450e":function(t,e,n){t.exports=n.p+"img/title.24c332b3.svg"},5316:function(t,e,n){"use strict";var r=n("31f1"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{attrs:{id:"junbo"}},[r("img",{staticClass:"title",attrs:{src:n("450e"),alt:""}}),r("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"purple-btn",attrs:{href:"#nav",id:"scroll"}},[t._v("Unblock Disney+ Now")]),r("span",{staticClass:"poweredby"},[t._v("⚡ by Poseidon-Network")]),r("img",{staticClass:"blob-p",attrs:{src:n("bedf"),alt:""}}),r("img",{staticClass:"blob-g",attrs:{src:n("1877"),alt:""}})]),r("div",{attrs:{id:"nav"}},[r("h2",[t._v("Choose Your Device")]),r("router-link",{staticClass:"btn",attrs:{"data-icon":"1",to:"/DisneyPlus/MacOS"}},[r("span",[t._v("MacOS")])]),r("router-link",{staticClass:"btn",attrs:{"data-icon":"2",to:"/DisneyPlus/Windows"}},[r("span",[t._v("Windows")])]),r("router-link",{staticClass:"btn",attrs:{"data-icon":"3",to:"/DisneyPlus/iOS"}},[r("span",[t._v("iOS")])]),r("router-link",{staticClass:"btn",attrs:{"data-icon":"4",to:"/DisneyPlus/android"}},[r("span",[t._v("Android")])])],1),r("router-view"),r("div",{staticClass:"giveaway"},[r("h3",[t._v("Free Disney+ account Giveaway!")]),r("h4",[t._v("Join our community to get a free Disney+ account")]),r("a",{staticClass:"purple-btn",attrs:{href:"",id:"telegram"},on:{click:t.telegramURL}},[t._v("Join Telegram")]),t._m(1)]),t._m(2)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/poseidon-network/qlauncher-linux",target:"_blank",id:"note"}},[t._v(" 💝 Earn rewards by helping others to watch Disney+ "),n("div",{staticClass:"btn"},[t._v("Collect your gift 🎁")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-elements"},[n("span",{staticClass:"triangle triangle-1"}),n("span",{staticClass:"triangle triangle-2 grey"}),n("span",{staticClass:"circle circle-1"}),n("span",{staticClass:"circle circle-2"}),n("span",{staticClass:"circle circle-outline circle-3"}),n("span",{staticClass:"circle circle-outline circle-4"}),n("span",{staticClass:"circle circle-half grey"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v(" Powered by "),n("a",{attrs:{target:"_blank",href:""}},[t._v("Poseidon-Network")])])}],i=n("1157"),s=n.n(i),c=n("5a58"),l=n.n(c);r["a"].use(l.a);var u={name:"telegramURL",methods:{telegramURL:function(){"zh-CN"===window.navigator.language||"zh-TW"===window.navigator.language?(s()("#telegram").attr("href","https://t.me/QQQ_Poseidon_zh"),window.location.href="https://t.me/QQQ_Poseidon_zh"):(s()("#telegram").attr("href","https://t.me/QQQ_Poseidon_En"),window.location.href="https://t.me/QQQ_Poseidon_En")}}},d=u,f=(n("5c0b"),n("2877")),p=Object(f["a"])(d,a,o,!1,null,null,null),h=p.exports,m=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h3",[t._v("👆🏻 Choose a device ")]),r("p",[t._v("Give QVPN a world and feel the MAGIC.")]),r("img",{attrs:{src:n("f908"),alt:""}})])}],g={name:"QVPN",props:{msg:String},data:function(){return{title:"QVPN"}}},y=g,_=(n("5316"),Object(f["a"])(y,v,b,!1,null,"615787ff",null)),w=_.exports;r["a"].use(m["a"]);var C=[{path:"/",redirect:"/DisneyPlus"},{path:"/DisneyPlus",name:"DisneyPlus",component:w},{path:"/DisneyPlus/MacOS",name:"MacOS",component:function(){return n.e("about").then(n.bind(null,"e594"))}},{path:"/DisneyPlus/Windows",name:"Windows",component:function(){return n.e("about").then(n.bind(null,"0da6"))}},{path:"/DisneyPlus/iOS",name:"iOS",component:function(){return n.e("about").then(n.bind(null,"d79c"))}},{path:"/DisneyPlus/Android",name:"Android",component:function(){return n.e("about").then(n.bind(null,"2ad2"))}}],P=new m["a"]({mode:"history",routes:C});P.afterEach((function(t,e,n){s()("html, body").animate({scrollTop:s()("#nav").offset().top},600)}));var O=P;r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},bedf:function(t,e,n){t.exports=n.p+"img/blob-p.8bb6a42b.svg"},f908:function(t,e,n){t.exports=n.p+"img/disney-logo-dark.b8da9a06.svg"}});
//# sourceMappingURL=app.68b5567b.js.map