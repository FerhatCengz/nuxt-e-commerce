<template>
  <section>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Giriş Yap</h3>
              <form @submit.prevent="adminAuthentication">
                <div class="mb-3">
                  <label for="username" class="form-label">Mail Adresiniz</label>
                  <input type="text" v-model="user.email" class="form-control" id="mail" name="mail" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Parolanız</label>
                  <input type="password" v-model="user.password" class="form-control" id="password" name="password" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Giriş Yap</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cookie from "js-cookie";
export default {
  layout: "AllowAnonymus",
  data() {
    return {
      user: {
        email: "f@gmail.com",
        password: "121212",
        returnSecureToken: true,
      },
    };
  },
  methods: {
    adminAuthentication() {
      this.$axios
        .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2HejaUeKAK50_pE_KbbGQWcEED_SAXYo", {
          ...this.user,
        })
        .then((response) => {
          Cookie.set("authKey", response.data.idToken);
          this.$store.commit("setToken", response.data.idToken);

          this.$router.push("/admin/product-list");
        })
        .catch(() => {
          this.$swal({
            title: "Kullanıcı adınız ve ya parolanız yanlış lütfen tekrar giriş yapınız.",
            icon: "warning",
          });
        });
    },
  },
};
</script>
