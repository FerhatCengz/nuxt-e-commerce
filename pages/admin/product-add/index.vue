<template>
  <section>
    <h2 class="text-center mt-4">Ürün Ekleme Sayfası</h2>
    <br />
    <form @submit.prevent="addProduct" class="m-auto w-75">
      <div class="col-12 mt-3 mb-3">
        <input v-model="product.name" class="text-center form-control" type="text" placeholder="Ürünün Adı" />
      </div>
      <div class="col-12 mt-3 mb-3">
        <input v-model="product.price" class="text-center form-control" type="text" placeholder="Ürünün Fiyatı" />
      </div>
      <div class="col-12 mt-3 mb-3">
        <input v-model="product.imageURL" class="text-center form-control" type="text" placeholder="Ürünün Resmi Link" />
      </div>

      <div class="col-12 mt-3 mb-3">
        <input v-model="product.stock" class="text-center form-control" type="number" placeholder="Ürünün Stoğu" />
      </div>
      <div class="col-12 mt-3 mb-3 d-flex justify-content-center">
        <button type="submit" class="btn btn-success">Ürünü Ekle</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      product: {
        name: "",
        price: "",
        imageURL: "",
        stock: "",
      },

      Toast: null,
    };
  },

  methods: {
    async addProduct() {
      this.$swal.showLoading();
      await this.$store.dispatch("addProductAsync", this.product);
      this.$swal.close();
      await this.Toast.fire({
        icon: "success",
        title: "Ürün Eklendi",
      });
      this.$router.push("./product-list");
    },
  },
  created() {
    this.Toast = this.$swal.mixin({
      toast: true,
      position: "top-end",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  },
};
</script>
