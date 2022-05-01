<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6 offset-3">
        <h3>HomePage</h3>
        <button @click="goToContact" class="btn btn-success btn-sm me-2">Contact with E-mail</button>
        <button @click="goToAbout" class="btn btn-warning btn-sm">About with Params</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToContact() {
      // this.$router.push("/contact?email=gokhan@puresol.io")
      this.$router.push({ name : "ContactPage", query : { email : "gokhan@puresol.io"}})
    },
    goToAbout(){
      // this.$router.push("/about/567");
      this.$router.push({ name : 'AboutPageWithParam', params : { contentID : 123123}})
    }
  }
}
</script>

<style scoped>

</style>
