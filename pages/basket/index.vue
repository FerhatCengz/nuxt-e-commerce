<template>
  <section>
    <div v-if="orderBaskets.length > 0" class="container">
      <div class="row">
        <div class="mt-5 col-6" style="display: flex; justify-content: end">
          <div class="row">
            <div class="col-12" v-for="orderBasket in orderBaskets" :key="orderBasket.id">
              <BasketProductCard :product="orderBasket"></BasketProductCard>
            </div>
          </div>
        </div>
        <div class="mt-5 col-6">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Toplam Ödeme</h5>
              <p class="card-text">
                Toplam Ödeme :
                {{ totalPrice | parseStringMoney }}
              </p>
              <a href="#" class="btn btn-primary" @click="paymentEnd">Ödeme yap</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="d-flex justify-content-center mt-5 alert alert-warning">
        <div style="font-size: 30px">
          Sepetiniz bomboş ürünlerimize
          <nuxt-link to="/"> göz atın</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BasketProductCard from "@/components/ProductUI/BasketProductCard";
export default {
  components: { BasketProductCard },
  computed: {
    totalPrice() {
      return this.orderBaskets ? this.orderBaskets.reduce((acc, basket) => acc + Number(basket.price), 0) : null;
    },
  },
  async asyncData({ $axios, isDev, route, store, env, params, query, req, res, redirect, error }) {
    var parseArray = [];
    var repsonse = await $axios.get("Basket.json");
    if (repsonse.data) {
      Object.keys(repsonse.data).map((dataKey) => {
        console.log(repsonse.data);
        parseArray.push(repsonse.data[dataKey].basketProduct);
      });

      return {
        orderBaskets: parseArray,
      };
    } else {
      return {
        orderBaskets: [],
      };
    }
  },

  methods: {
    async paymentEnd() {
      this.$swal.showLoading();
      await this.$axios.post("ReadyBasket.json", this.orderBaskets);
      await this.$axios.delete("Basket.json");
      this.$swal({
        title: "Siparişiniz oluşturuldu",
        icon: "success",
      });
      this.$router.push("/");
    },
  },
};
</script>
