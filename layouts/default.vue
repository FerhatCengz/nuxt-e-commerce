<template>
  <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand" tag="a"> FC E-Commerce </nuxt-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" tag="a">Ürünlerimiz</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="./basket" class="nav-link" tag="a">Sepetim</nuxt-link>
            </li>
          </ul>
          <div class="select-auto-computed">
            <AutoCompSelect />
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
  </section>
</template>

<style scoped>
.select-auto-computed {
  width: 100%; /* Default width for mobile */
}
/* Media query for desktop */
@media (min-width: 768px) {
  .select-auto-computed {
    width: 50%; /* Adjust the width for desktop */
  }
}
</style>

<script>
import AutoCompSelect from "@/components/AutoCompSelect";
export default {
  components: {
    AutoCompSelect,
  },
};
</script>
