(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(t,n,e){"use strict";e.r(n);var i=e(419),o=e(371);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e(401);var c=e(1),r=Object(c.a)(o.default,i.a,i.b,!1,null,null,null);r.options.__file="c.vue",n.default=r.exports},371:function(t,n,e){"use strict";e.r(n);var i=e(372),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n.default=o.a},372:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"C",data:function(){return{isShowTip:!1,tipText:"点击复制颜色"}},props:["color","type"],methods:{resolveStyle:function(){var t=" background-color: "+this.color+";";return"text"===this.type?t=" background-color: #fff;":"text-w"===this.type&&(t=" background-color: #000;"),t},resolveStyleP:function(){return" color: "+this.color+";"},showTip:function(){this.isShowTip=!0},hiddenTip:function(){this.isShowTip=!1,this.tipText="点击复制颜色"},changeTip:function(){var t=this;this.tipText="已复制到粘贴板",!1===this.isShowTip&&(this.isShowTip=!0);setTimeout(function(){t.isShowTip=!1},600)}},mounted:function(){e.e(1).then(e.t.bind(null,399,7)).then(function(t){new t.default(".color-content")})}}},373:function(t,n,e){},401:function(t,n,e){"use strict";var i=e(373);e.n(i).a},419:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"page-c"},[e("transition",{attrs:{name:"tip"}},[t.isShowTip?e("div",{staticClass:"tip-text"},[t._v(t._s(t.tipText))]):t._e()]),e("div",{staticClass:"color-content",attrs:{"data-clipboard-text":t.color},on:{mouseenter:function(n){t.showTip()},mouseleave:function(n){t.hiddenTip()},click:function(n){t.changeTip()}}},[e("div",{staticClass:"color-block",style:t.resolveStyle()},[e("p",{style:t.resolveStyleP()},[t._v("\n        "+t._s("text"===t.type||"text-w"===t.type?"A":" ")+"\n      ")])]),t._v("\n      "+t._s(t.color)+"\n  ")])],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);