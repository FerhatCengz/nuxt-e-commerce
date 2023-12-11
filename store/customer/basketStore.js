export default {
  state: {
    orderBaskets: [],
  },
  getters: {
    getOrderBaskets(state) {
      return state.orderBaskets;
    },
  },
  mutations: {
    setOrderBaskets(state, orderBasketProduct) {
      state.orderBaskets = orderBasketProduct;
    },
  },
  actions: {
    async addOrderBasketAsync({ commit }, basketProduct) {
      console.log("basketProduct => ", basketProduct);
      var response = await this.$axios.post("Basket.json", { basketProduct });
      console.log("response => ", response.data);
    },
  },
};
