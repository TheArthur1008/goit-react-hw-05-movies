"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[735],{25:function(e,t,r){r.d(t,{FN:function(){return d},_S:function(){return f},h$:function(){return o},nw:function(){return u},w7:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(44),i=s.ZP.create({baseURL:"https://api.themoviedb.org/3/"}),u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day",{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/".concat("search/movie"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3",query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"),{params:{api_key:"f9515d5c748130764d8b19c2d2137bc3"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},762:function(e,t,r){r.d(t,{O:function(){return s}});var n=r(731),a=r(910),c=r(184),s=function(e){var t=e.movies,r=e.from;return(0,c.jsx)("ul",{className:a.Z.list,children:t&&t.map((function(e){var t=e.id,s=e.name,i=e.title,u=e.poster_path;return(0,c.jsx)("li",{className:a.Z.item,children:(0,c.jsxs)(n.rU,{to:"/movies/".concat(t),state:{from:r},className:a.Z.link,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:i,width:"150",height:"200"}),(0,c.jsx)("span",{className:a.Z.description,children:s||i})]})},t)}))})}},735:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(885),c=r(757),s=r.n(c),i=r(762),u=r(791),o=r(731),p=r(25),f="Pages_input__YjEUL",d="Pages_button__0aZ9n",l="Pages_wrapperTitle__OtmOD",m=r(184),v=function(){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,u.useState)([]),_=(0,a.Z)(v,2),h=_[0],b=_[1],w=(0,o.lr)(),x=(0,a.Z)(w,2),k=x[0],g=x[1],y=k.get("query"),Z=(0,u.useCallback)((0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,p.h$)(y);case 4:t=e.sent,b(t);case 6:case"end":return e.stop()}}),e)}))),[y]);return(0,u.useEffect)((function(){Z()}),[Z,y]),(0,m.jsxs)("div",{className:l,children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g({query:r})},children:[(0,m.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)},className:f}),(0,m.jsx)("button",{type:"submit",className:d,children:"Search"})]}),(0,m.jsx)(i.O,{movies:h})]})}},910:function(e,t){t.Z={wrapper:"Movies_wrapper__vWoXg",wrapperTitle:"Movies_wrapperTitle__QOA4H",wrapperDescription:"Movies_wrapperDescription__b6oU4",error:"Movies_error__ga8bx",list:"Movies_list__JEO-P",item:"Movies_item__+Yifn",link:"Movies_link__0oDWE",description:"Movies_description__k3l7V"}}}]);
//# sourceMappingURL=735.2dde6c9d.chunk.js.map