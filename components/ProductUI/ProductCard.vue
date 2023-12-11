<template>
  <div class="card" style="width: 20rem">
    <div class="card-header" style="display: flex; justify-content: space-between; border: none">
      <b class="card-text">{{ product.price | parseStringMoney }}</b> <a class="btn btn-primary" @click.prevent="addBasket"> Sepete Ekle</a>
    </div>
    <img :src="product.imageURL" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">⭐ {{ Math.floor(Math.random() * 1000) }} Değerlendirme | 💓 {{ Math.floor(Math.random() * 1000) }} Favori</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },

  filters: {
    parseStringMoney: function (digit) {
      let turksihLira = new Intl.NumberFormat("tr-Tr", {
        style: "currency",
        currency: "TRY",
      });
      return turksihLira.format(digit);
    },
  },
  methods: {
    addBasket() {
      this.$emit("add-basket", this.product);
    },
  },
};
</script>
