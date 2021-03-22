<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta :article="article" @favorite="favorite"></article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>
      <!-- 评论 -->
      <article-comment :article="article"></article-comment>
    </div>
  </div>
</template>

<script>
import { getArticleDetail, addFavorite,deleteFavorite } from "@/api/article";
import MarkdownIt from "markdown-it";
import ArticleMeta from "./components/ArticleMeta";
import ArticleComment from "./components/ArticleComment";

export default {
  name: "ArticleDetail",
  async asyncData({ params }) {
    const { slug } = params;
    const { data } = await getArticleDetail(slug);
    const { article } = data;
    const md = new MarkdownIt();
    article.body = md.render(article.body);
    return {
      article,
    };
  },
  components: {
    ArticleMeta,
    ArticleComment
  },
  methods: {
    async favorite() {
      const isFavorite = this.article.favorited? deleteFavorite : addFavorite;
      const  res = await isFavorite(this.article.slug);
      this.article = res.data.article
    }
  }
};
</script>

<style>
</style>