<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <nuxt-link to="/" class="nav-link">conduit</nuxt-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <nuxt-link to="/" class="nav-link"> 首页 </nuxt-link>
        </li>

        <template v-if="user">
          <li class="nav-item">
            <nuxt-link to="/editor" class="nav-link">
              <i class="ion-compose"></i>&nbsp;New Article
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link to="/setting" class="nav-link">
              <i class="ion-gear-a"></i>&nbsp;个人设置
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="`profile/${user.username}`" class="nav-link">
              <img class="user-pic" :src="user.image" />
              {{ user.username }}
            </nuxt-link>
          </li>
        </template>

        <template v-else>
          <li class="nav-item">
            <nuxt-link
              :to="{
                name: 'login',
              }"
              class="nav-link"
              >登录</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link
              :to="{
                name: 'register',
              }"
              class="nav-link"
              >注册</nuxt-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["user"]),
  },
};
</script>