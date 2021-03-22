const cookieparser = process.server ? require("cookieparser") : undefined;

// 为了防止数据冲突，将state定义为一个函数返回
export const state = () => ({
  // 用户登录信息
  user: null,
});

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
};

export const actions = {
  // nuxtServerInit是nuxt一个特俗的方法，运行在服务端
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    if (req.headers.cookie) {
      const result = cookieparser.parse(req.headers.cookie);
      try {
        user = JSON.parse(result.user);
      } catch (error) {
        // console.log(error);
      }
    }
    commit("setUser", user);
  },
};
