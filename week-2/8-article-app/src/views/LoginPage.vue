<template>
  <main class="form-signin card mt-5">
    <h1 class="h3 mb-3 fw-normal">Giriş Yap</h1>
    <div class="form-floating">
      <input v-model="userData.username" type="text" class="form-control" placeholder="felakettin..">
      <label>Kullanıcı Adı</label>
    </div>
    <div class="form-floating">
      <input v-model="userData.password" type="password" class="form-control" id="floatingPassword"
             placeholder="Password">
      <label for="floatingPassword">Şifre</label>
    </div>

    <button :disabled="loadingState" class="w-100 btn btn-lg btn-primary" @click="onSubmit">Giriş Yap</button>
    <div class="text-center mt-2">
      <p>Hesabım yok,
        <router-link :to="{ name : 'RegisterPage'}">Kayıt Ol</router-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    userData: {
      username: "gkandemir",
      password: "123123123"
    },
    loadingState: false
  }),
  methods: {
    onSubmit() {
      const userData = {
        ...this.userData
      }
      this.$appAxios.get(`/users?username=${userData.username}&password=${userData.password}`, userData)
          .then(({data: users, status}) => {
            if (status === 200 && users.length > 0) {
              const user = users[0];
              // Vuex ile Store
              // Route Navigation
              // Loading
              // mixin ile Request Kontrolleri
              // Ekleme ve Listeleme Sayfalarini, Yorum Ekleme
              console.log(user);
            }
          })
          .catch(e => console.log(e))
          .finally(() => this.loadingState = false)
    }
  }
}
</script>
