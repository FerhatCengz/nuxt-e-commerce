<template>
  <section>
    <div class="container mt-5" v-if="products.length > 0">
      <p class="lead text-center">Toplam Sipariş Tutarı : {{ totalPrice | parseStringMoney }}</p>
      <button @click="finshOrder" class="btn btn-success">Tüm siparişleri teslim et</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Ürünün Resmi</th>
            <th scope="col">Ürünün Barkod</th>
            <th scope="col">Ürünün Adı</th>
            <th scope="col">Ürünün Fiyatı</th>
            <th scope="col">Ürünün Stoğu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><img :src="product.imageURL" alt="product.name" style="height: 150px; width: 150px" /></td>
            <th scope="row">{{ product.id }}</th>
            <th scope="row">{{ product.name }}</th>
            <td>{{ product.price | parseStringMoney }}</td>
            <td>{{ product.stock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="alert alert-warning m-4 d-flex justify-content-center">
      <h3 class="text-center">Hiç bir siparişimiz yok 😿</h3>
    </div>
  </section>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    totalPrice() {
      return this.products ? this.products.reduce((acc, basket) => acc + Number(basket.price), 0) : null;
    },
  },
  methods: {
    async finshOrder() {
      this.$swal.showLoading();
      await this.$axios.delete("ReadyBasket.json");
      this.products = [];
      this.$swal("Tüm siparişler teslim edildi!");
    },
  },
  async asyncData({ $axios, isDev, route, store, env, params, query, req, res, redirect, error }) {
    const parseArray = [];
    var response = await $axios.get("/ReadyBasket.json");
    if (response.data) {
      Object.keys(response.data).map((dataKey) => {
        response.data[dataKey].map((data) => {
          parseArray.push(data);
        });
      });

      return {
        products: parseArray,
      };
    }
    return {
      products: [],
    };
  },
};
</script>
