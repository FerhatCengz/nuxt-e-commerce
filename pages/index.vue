<template>
  <div class="container">
    <div class="row">
      <div class="col-4 mt-4 mb-3" v-for="product in products" :key="product.id">
        <ProductCard @add-basket="addBasket" :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductUI/ProductCard";

export default {
  components: { ProductCard },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  data() {
    return {
      Toast: null,
    };
  },
  methods: {
    async addBasket(basketObject) {
      this.$swal.showLoading();
      this.$swal.close();

      this.$store.dispatch("addOrderBasketAsync", basketObject);
      await this.Toast.fire({
        icon: "success",
        html: `
        <div class="row">
          <div class="col-12">
            <b>Sepetinize ${basketObject.name} ürünü eklendi.</b>
            </div>
          <div class="col-12 mt-4">
            <a href="/basket" class="btn btn-success">Sepete Git</a>
            </div>
        </div>
        
        `,
      });
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
