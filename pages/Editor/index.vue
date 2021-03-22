<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul style="color: red">
            <template v-for="(msg, key) in errors">
              <li v-for="(err, index) in msg" :key="index">
                {{ key }} {{ err }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="article.tagList"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="add"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from "@/api/article";
export default {
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: "",
      },
      errors: {},
    };
  },
  methods: {
    async add() {
      try {
        if (this.article.tagList) {
          this.article.tagList.split();
        } else {
          this.article.tagList = [];
        }
        const res = await createArticle(this.article);
        if (res.status === 200) {
          alert("添加成功");
          this.$router.push({
            name: "article",
            params: {
              slug: res.data.article.slug,
            },
          });
        }
      } catch (err) {
        console.log(err);
        this.errors = err.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>