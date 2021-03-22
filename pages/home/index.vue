<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'feed',
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'feed',
                    },
                  }"
                  >我的文章</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'global',
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global',
                    },
                  }"
                  >全部</nuxt-link
                >
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab === 'tag'
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag
                    }
                  }"
                ># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link
                :to="{
                  name: 'article',
                  params: {
                    slug: article.slug,
                  },
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <a href="" class="author">{{ article.author.username }}</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name: 'article',
                params: {
                  slug: article.slug,
                },
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页 -->
          <ul class="pagination">
            <li
              class="page-item"
              :class="{
                active: item === page,
              }"
              v-for="item in total"
              :key="item"
            >
              <nuxt-link
                class="page-link"
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag: $route.query.tag,
                    tab: tab,
                  },
                }"
                >{{ item }}</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{
                  name: 'home',
                  query: {
                    tag,
                    tab: 'tag',
                  },
                }"
                class="tag-pill tag-default"
                v-for="tag in tags"
                :key="tag"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getSelfArticles, getTags } from "@/api/article";
import { mapState } from 'vuex';

export default {
  name: "HomeIndex",
  async asyncData({ query }) {
    const tab = query.tab || "global";
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tag = query.tag;
    const params = {
      limit,
      offset: (page - 1) * limit,
      tag,
    };

    const queryArticles = query.tab === "feed" ? getSelfArticles : getArticles;

    const [articleRes, tagsRes] = await Promise.all([
      queryArticles(params),
      getTags(),
    ]);

    const { articles, articlesCount } = articleRes.data;
    let { tags } = tagsRes.data;
    tags = tags.filter(k => k.replace(/\sx+/g,""));
    return {
      tab,
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag
    };
  },
  watchQuery: ["page", "tab", 'tag',],
  computed: {
    ...mapState(['user']),
    total() {
      return Math.ceil(this.articlesCount / this.limit);
    },
  },
};
</script>

<style>
</style> 