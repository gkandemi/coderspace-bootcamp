<template>
  <main class="form-signin card mt-5">
    <h1 class="h3 mb-3 fw-normal">Kayıt Ol</h1>
    <div class="form-floating">
      <input v-model="userData.username" type="text" class="form-control" placeholder="felakettin..">
      <label>Kullanıcı Adı</label>
    </div>
    <div class="form-floating">
      <input v-model="userData.email" type="email" class="form-control" id="floatingInput"
             placeholder="name@example.com">
      <label for="floatingInput">E-posta</label>
    </div>
    <div class="form-floating">
      <input v-model="userData.password" type="password" class="form-control" id="floatingPassword"
             placeholder="Password">
      <label for="floatingPassword">Şifre</label>
    </div>

    <button :disabled="loadingState" class="w-100 btn btn-lg btn-primary" @click="onSave">Kayıt Ol</button>
    <div class="text-center mt-2">
      <p>Zaten üyeyim, <router-link :to="{ name : 'LoginPage'}">Giriş Yap</router-link></p>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    userData: {
      username: null,
      email: null,
      password: null
    },
    loadingState: false
  }),
  methods: {
    onSave() {
      const userData = {
        ...this.userData
      }
      const answer = confirm("Kayıt Olmak istiyor musunuz?");

      if (answer) {
        this.$appAxios.post("/users", userData)
            .then(({data: user, status}) => {
              if (status === 201) {
                console.log(user)
              }
            })
            .catch(e => console.log(e))
            .finally(() => this.loadingState = false)
      }
    }
  }
}
</script>
