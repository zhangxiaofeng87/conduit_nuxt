import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bff8e252 = () => interopDefault(import('..\\pages\\layouts' /* webpackChunkName: "" */))
const _1012395e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _071dcf37 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _18de329e = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _5fdf8942 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _76d7f144 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))
const _dfe4a412 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _bff8e252,
    children: [{
      path: "",
      component: _1012395e,
      name: "home"
    }, {
      path: "login",
      component: _071dcf37,
      name: "login"
    }, {
      path: "register",
      component: _071dcf37,
      name: "register"
    }, {
      path: "setting",
      component: _18de329e,
      name: "setting"
    }, {
      path: "editor",
      component: _5fdf8942,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _76d7f144,
      name: "article"
    }, {
      path: "profile/:username",
      component: _dfe4a412,
      name: "profile"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
