<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="product.imageURL" class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8" style="display: flex; align-items: center">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.price | parseStringMoney }}</p>
          <p class="card-text">
            <small class="text-body-secondary">{{ product.stock == 2 ? "Tükeniyor" : "" }}</small>
          </p>
        </div>
      </div>
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
};
</script>
