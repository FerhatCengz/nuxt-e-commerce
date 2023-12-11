export default {
  state: {
    token: null,
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
  },

  actions: {
    nuxtServerInit({ commit }, { req }) {
      // Sunucu tarafında çalışıyorsa (Nuxt.js Universal mod)
      if (req.headers.cookie) {
        const token = req.headers.cookie.split(";").find((c) => c.trim().startsWith("authKey="));
        if (token) {
          commit("setToken", token.split("=")[1]);
        }
      }
    },
  },
};
