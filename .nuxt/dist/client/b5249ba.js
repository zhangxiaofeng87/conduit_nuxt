(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{180:function(t,e,r){"use strict";r.d(e,"e",(function(){return c})),r.d(e,"g",(function(){return o})),r.d(e,"h",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"b",(function(){return d})),r.d(e,"f",(function(){return f})),r.d(e,"a",(function(){return v})),r.d(e,"c",(function(){return _}));var n=r(58),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/tags",params:t})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles",data:t})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})}},256:function(t,e,r){"use strict";r.r(e);r(34);var n=r(3),c=r(180),o=r(199),l=r.n(o),m={props:{article:Object},methods:{favorite:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("favorite");case 1:case"end":return e.stop()}}),e)})))()}}},d=r(21),f=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t.article.updatedAt))])]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n      关注 "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:t.favorite}},[r("i",{staticClass:"ion-heart"}),t._v("\n      点赞 "),r("span",{staticClass:"counter"},[t._v("(29)")])])])}),[],!1,null,null,null).exports,v={props:{article:{type:Object}},data:function(){return{comment:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.f)(t.article.slug);case 2:r=e.sent,t.comment=r.data.comments;case 4:case"end":return e.stop()}}),e)})))()}},_={name:"ArticleDetail",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,article,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=r.slug,e.next=4,Object(c.d)(n);case 4:return o=e.sent,data=o.data,article=data.article,m=new l.a,article.body=m.render(article.body),e.abrupt("return",{article:article});case 10:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:f,ArticleComment:Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("form",{staticClass:"card comment-form"},[t._m(0),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.article.author.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("评 论")])])]),t._v(" "),t._l(t.comment,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("a",{staticClass:"comment-author",attrs:{href:""}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n         \n        "),r("a",{staticClass:"comment-author",attrs:{href:""}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(e.updatedAt))]),t._v(" "),t._m(1,!0)])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-block"},[e("textarea",{staticClass:"form-control",attrs:{placeholder:"写点什么呢...",rows:"3"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"mod-options"},[r("i",{staticClass:"ion-edit"}),t._v(" "),r("i",{staticClass:"ion-trash-a"})])}],!1,null,null,null).exports},methods:{favorite:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.article.favorited?c.c:c.a,e.next=3,r(t.article.slug);case 3:n=e.sent,t.article=n.data.article;case 5:case"end":return e.stop()}}),e)})))()}}},h=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article},on:{favorite:t.favorite}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("article-comment",{attrs:{article:t.article}})],1)])}),[],!1,null,null,null);e.default=h.exports}}]);