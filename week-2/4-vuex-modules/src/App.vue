<template>
  <h3 class="text-center">Vuex Modules</h3>
  <div class="container">
    <div class="row mt-3">
      <div class="col-4 p-2">
        <h3>Global State</h3>
        <div class="card p-2">
          <strong>Application Name {{ appName }}</strong>
          <strong>SideBar : {{ hasSideBar }}</strong>
        </div>
      </div>
      <div class="col-4 p-2">
        <h3>Products</h3>
        <div class="card p-2">
          <ul class="list-group">
            <li v-for="item in productList" :key="item" class="list-group-item">{{ item }}</li>
          <button class="btn btn-sm btn-primary mt-2" @click="newProduct">Ekle</button>
          </ul>
        </div>
      </div>
      <div class="col-4 p-2">
        <h3>Contacts</h3>
        <div class="card p-2">
          <ul class="list-group">
            <li v-for="item in contactList" :key="item" class="list-group-item">{{ item }}</li>
          </ul>
          <button class="btn btn-sm btn-primary mt-2" @click="newContact">Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods : {
    newProduct(){
      this.$store.commit('products/setItem', `Eklenen Ürün - ${new Date().getTime().toString().slice(10,13)}`)
    },
    newContact(){
      this.$store.commit('contacts/setItem', `Eklenen Müşteri - ${new Date().getTime().toString().slice(10,13)}`)
      // this.$store.dispatch('contacts/setItem', `Eklenen Müşteri - ${new Date().getTime().toString().slice(10,13)}`)
    },
  },
  computed : {
    ...mapGetters({
      appName : "_getAppName",
      hasSideBar : "_isSideBarEnabled",
      productList : "products/_itemList",
      contactList : "contacts/_itemList"
    })
  }
}
</script>
