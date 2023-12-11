export default {
  state: {
    products: [],
  },
  getters: {
    /**
     * Vuex tarafında ki state içinde ki ürünleri listleyecek
     * @param {Object} state - Vuex tarafında ki datam
     * @returns {Array} ürünlerin dizisi döndürür
     */
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    /**
     * State tarafında ki prodcuts dizisine ürün ekler
     * @param {Object} state - Vuex tarafında ki data objesi
     * @param {*} productObject - Data tarafında güncelleme yaparken ne işe güncelleme yapacağımızı belirlen bir nesne (obje)
     */
    setProducts(state, productObject) {
      state.products.push(productObject);
    },
  },
  actions: {
    async nuxtServerInit({ commit }) {
      var response = await this.$axios.get("https://nuxt-cookie-default-rtdb.firebaseio.com/Product.json");
      Object.keys(response.data).map((dataKey) => {
        commit("setProducts", { id: dataKey, ...response.data[dataKey] });
      });
    },

    /**
     * Uzak bir sunucuya istek atıp ürün ekler.(örnek sunucu : firebase)
     * @param {Object} param - Vuex geneli methodlar
     * @param {object} productObject - Dışardan gelen ürün ile alaklı nesne
     */
    async addProductAsync({ commit }, productObject) {
      var response = await this.$axios.post("Product.json", productObject);
      commit("setProducts", { id: response.data.name, ...productObject });
    },
  },
};
