<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6 offset-3">
        <h3>ContactPage</h3>
        <input v-model="userEmail" type="text" class="form-control mb-2" placeholder="email adresinizi giriniz..">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <button class="btn btn-sm btn-primary">Kaydet</button>
          <button @click="goToHome" class="btn btn-sm btn-light">Geri Dön</button>
        </div>
        {{ $route.query.email }}
        <button @click="$router.push({ name : 'ContactNew'})" class="btn btn-sm btn-primary">Yeni</button>
        <button @click="$router.push({ name : 'ContactList'})" class="btn btn-sm btn-success">Liste</button>
        <button @click="$router.push({ name : 'ContactUpdate'})" class="btn btn-sm btn-warning">Düzenle</button>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  methods : {
    goToHome(){
      // this.$router.push("/")
      this.$router.push({ name : "HomePage"})
    },
    bardarGetir(){}
  },
  data(){
    return {
      userEmail : null
    }
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("Created");
  },
  beforeRouteEnter(to, from, next){
    console.log(`beforeRouteEnter ${from.name} => ${to.name}`)
    next(vm => {
      console.log(vm.globalPermission);
      next(false)
    })
  },
  beforeRouteUpdate(){
    console.log("beforeRouteUpdate")
  },
  beforeRouteLeave(to, from, next){
    // console.log(to);
    // console.log(from);
    // if(!this.userEmail){
      // const leaveCondition = confirm("E-posta boş! Yine de devam etmek istiyor musunuz?");
      // next(leaveCondition);
    // }
    next();
  }
}
</script>

<style scoped>

</style>
