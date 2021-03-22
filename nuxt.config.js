module.exports = {
  hash: true,
  router: {
    linkExactActiveClass: "active",
    // 自定义路由规则
    extendRoutes(routes, resolve) {
      // 清除默认路由规则
      routes.splice(0);

      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layouts/"),
            children: [
              {
                path: "",
                name: "home",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                path: "login",
                name: "login",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "register",
                name: "register",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                path: "setting",
                name: "setting",
                component: resolve(__dirname, "pages/setting/"),
              },
              {
                path: "editor",
                name: "editor",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                path: "article/:slug",
                name: "article",
                component: resolve(__dirname, "pages/article/"),
              },
              {
                path: "profile/:username",
                name: "profile",
                component: resolve(__dirname, "pages/profile/"),
              },
            ],
          },
        ]
      );
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: ["~/plugins/request.js"],
};
