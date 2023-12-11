<template>
  <section></section>
</template>

<script>
export default {
  layout: "admin",
  created() {
    this.$router.push("./product-list");
  },
};
</script>
