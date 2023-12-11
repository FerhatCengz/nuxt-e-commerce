<template>
  <section>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link to="./product-list" tag="a" class="nav-link active"> Ürün Listesi</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="./product-add" tag="a" class="nav-link active"> Ürün Ekle</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="./product-order" tag="a" class="nav-link active">Siparişler</nuxt-link>
            </li>
            <li class="nav-item">
              <a style="cursor: pointer" @click="logOut" class="nav-link active">Çıkış Yap</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nuxt />
  </section>
</template>

<script>
import Cookies from "js-cookie";
export default {
  middleware: "auth",
  methods: {
    logOut() {
      Cookies.remove("authKey");
      this.$store.commit("removeToken");
      this.$router.push("/auth");
    },
  },
};
</script>
