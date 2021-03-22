<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form">
        <div class="card-block">
          <textarea
            class="form-control"
            placeholder="写点什么呢..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img
            :src="article.author.image"
            class="comment-author-img"
          />
          <button class="btn btn-sm btn-primary">评 论</button>
        </div>
      </form>

      <div class="card" v-for="c in comment" :key="c.id">
        <div class="card-block">
          <p class="card-text">{{c.body}}</p>
        </div>
        <div class="card-footer">
          <a href="" class="comment-author">
            <img
              :src="c.author.image"
              class="comment-author-img"
            />
          </a>
          &nbsp;
          <a href="" class="comment-author">{{c.author.username}}</a>
          <span class="date-posted">{{c.updatedAt}}</span>
          <span class="mod-options">
            <i class="ion-edit"></i>
            <i class="ion-trash-a"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments } from "@/api/article";
export default {
  props: {
    article: {
      type: Object
    }
  },
  data() {
    return {
      comment: []
    }
  },
  async mounted() {
    const res = await getComments(this.article.slug)
    this.comment = res.data.comments
  }
};
</script>

<style>
</style>