<script>
export default {
  name: "LoginView",
  data: () => ({
    userData: {
      email: "defne@kablosuzkedi.com",
      password: "123123123",
    }
  }),
  methods: {
    onSubmit() {
      const userData = this.copy(this.userData)
      this.$store.dispatch("users/login", userData)
    }
  }
}
</script>
<template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Giriş Yap</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input v-model="userData.email" type="email" class="form-control" placeholder="info@kablosuzkedi.com"/>
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input v-model="userData.password" type="password" class="form-control"/>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button @click="onSubmit" class="btn btn-sm btn-primary">Giriş Yap</button>
            </div>
          </div>
          <div class="card-footer text-center">
            <router-link :to="{name : 'RegisterView'}" class="p-0 m-0 btn btn-link text-primary">Üye değilim
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
