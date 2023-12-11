<template>
  <div class="container mt-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ürünün Adı</th>
          <th scope="col">Ürünün Barkod</th>
          <th scope="col">Ürünün Fiyatı</th>
          <th scope="col">Ürünün Resmi</th>
          <th scope="col">Ürünün Stoğu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td><img :src="product.imageURL" alt="product.name" style="height: 150px; width: 150px" /></td>
          <th scope="row">{{ product.id }}</th>
          <th scope="row">{{ product.name }}}</th>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
