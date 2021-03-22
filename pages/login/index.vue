<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "登录" : "注册" }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="register" v-if="isLogin">Need an account?</nuxt-link>
            <nuxt-link to="login" v-else>Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(msg, key) in errors">
              <li v-for="(err, index) in msg" :key="index">
                {{ key }} {{ err }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="submit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="user.email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="user.password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "登 录" : "注 册" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";

const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  computed: {
    isLogin() {
      return this.$route.name === "login" ? true : false;
    },
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async submit() {
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });
        // 登录/注册成功
        this.$store.commit("setUser", data.user);

        // 保存用户信息到本地cookie
        Cookie.set("user", data.user);

        // 登录成功 返回到首页
        this.$router.push("/");
      } catch (err) {
        // console.log(err.response);
        this.errors = err.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>