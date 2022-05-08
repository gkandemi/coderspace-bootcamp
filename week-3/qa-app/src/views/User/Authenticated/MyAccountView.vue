<script>
import {mapGetters} from "vuex";
import { pick  } from "lodash"

export default{
  computed : {
    ...mapGetters({
      currentUser : "users/currentUser",
      categoryList: "categories/categoryList",
    })
  },
  data: () => ({
    userData : {
      full_name : null,
      email : null,
      categoryId : null
    }
  }),
  mounted(){
    this.userData = pick(this.currentUser, ["full_name", "email", "categoryId"])
  },
  methods : {
    onSubmit(){
      const userData = this.copy(this.userData);
      this.$appAxios.patch(`/users/${this.currentUser.id}`, userData).then(({status, data : updatedUser}) => {
        if(status === 200) this.$store.commit("users/setUser", updatedUser);
      })
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Hesap Detayları</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input
                  v-model="userData.full_name"
                  type="text"
                  class="form-control"
                  placeholder="Depde Kandemir"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input
                  v-model="userData.email"
                  type="email"
                  class="form-control"
                  placeholder="info@kablosuzkedi.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select v-model="userData.categoryId" class="form-select">
                <option selected>Lütfen bir kategori seçiniz</option>
                <option v-for="category in categoryList" :value="category.id" :key="category.id">{{category.title }}</option>
              </select>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button @click="onSubmit" class="btn btn-sm btn-primary">Düzenle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
