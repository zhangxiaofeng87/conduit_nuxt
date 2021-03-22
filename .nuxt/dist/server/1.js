exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSelfArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteFavorite; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共的文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
}; // 获取自己的文章列表

const getSelfArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    params
  });
}; // 获取标签列表

const getTags = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/tags",
    params
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 新增文章

const createArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data: params
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=6c819224&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article},on:{"favorite":_vm.favorite}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_c('article-comment',{attrs:{"article":_vm.article}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=6c819224&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(24);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(23);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=template&id=a9a07230&
var ArticleMetavue_type_template_id_a9a07230_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_vm._ssrNode("<a href><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.updatedAt))+"</span></div> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
      active: _vm.article.author.following,
    }))+"><i class=\"ion-plus-round\"></i>\n      关注 <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
      active: _vm.article.favorited,
    }))+"><i class=\"ion-heart\"></i>\n      点赞 <span class=\"counter\">(29)</span></button>")])}
var ArticleMetavue_type_template_id_a9a07230_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=template&id=a9a07230&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleMetavue_type_script_lang_js_ = ({
  props: {
    article: Object
  },
  methods: {
    async favorite() {
      this.$emit('favorite');
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleMetavue_type_script_lang_js_ = (ArticleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleMetavue_type_script_lang_js_,
  ArticleMetavue_type_template_id_a9a07230_render,
  ArticleMetavue_type_template_id_a9a07230_staticRenderFns,
  false,
  null,
  null,
  "1e09f77f"
  
)

/* harmony default export */ var ArticleMeta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleComment.vue?vue&type=template&id=6d9b1297&
var ArticleCommentvue_type_template_id_6d9b1297_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"写点什么呢...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.article.author.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">评 论</button></div></form> "+(_vm._ssrList((_vm.comment),function(c){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(c.body))+"</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img"+(_vm._ssrAttr("src",c.author.image))+" class=\"comment-author-img\"></a>\n         \n        <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(c.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(c.updatedAt))+"</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div>")}))+"</div>")])}
var ArticleCommentvue_type_template_id_6d9b1297_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue?vue&type=template&id=6d9b1297&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleComment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ArticleCommentvue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object
    }
  },

  data() {
    return {
      comment: []
    };
  },

  async mounted() {
    const res = await Object(api_article["f" /* getComments */])(this.article.slug);
    this.comment = res.data.comments;
  }

});
// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCommentvue_type_script_lang_js_ = (ArticleCommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var ArticleComment_component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCommentvue_type_script_lang_js_,
  ArticleCommentvue_type_template_id_6d9b1297_render,
  ArticleCommentvue_type_template_id_6d9b1297_staticRenderFns,
  false,
  injectStyles,
  null,
  "f7bce656"
  
)

/* harmony default export */ var ArticleComment = (ArticleComment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleDetail",

  async asyncData({
    params
  }) {
    const {
      slug
    } = params;
    const {
      data
    } = await Object(api_article["d" /* getArticleDetail */])(slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: ArticleMeta,
    ArticleComment: ArticleComment
  },
  methods: {
    async favorite() {
      const isFavorite = this.article.favorited ? api_article["c" /* deleteFavorite */] : api_article["a" /* addFavorite */];
      const res = await isFavorite(this.article.slug);
      this.article = res.data.article;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "923a0610"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map