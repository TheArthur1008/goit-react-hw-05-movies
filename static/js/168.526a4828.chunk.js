"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{25:function(r,e,t){t.d(e,{FN:function(){return d},_S:function(){return f},h$:function(){return o},nw:function(){return i},w7:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(44),s=u.ZP.create({baseURL:"https://api.themoviedb.org/3/"}),i=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("trending/movie/day",{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/".concat("search/movie"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3",query:e}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(e),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(e,"/credits"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("/movie/".concat(e,"/reviews"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},168:function(r,e,t){t.r(e),t.d(e,{default:function(){return o}});var n=t(885),a=t(25),c=t(791),u=t(739),s="Reviews_list__okdpy",i=t(184),o=function(){var r=(0,u.UO)().moviesId,e=(0,c.useState)([]),t=(0,n.Z)(e,2),o=t[0],p=t[1];return(0,c.useEffect)((function(){(0,a.FN)(r).then((function(r){var e=r.results;p(e)})).catch((function(r){var e=r.message;console.log(e)}))}),[r]),(0,i.jsx)(i.Fragment,{children:o.length?(0,i.jsx)("ul",{className:s,children:o.map((function(r){var e=r.content,t=r.author,n=r.id;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h3",{children:["Author: ",t]}),(0,i.jsx)("p",{children:e})]},n)}))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=168.526a4828.chunk.js.map