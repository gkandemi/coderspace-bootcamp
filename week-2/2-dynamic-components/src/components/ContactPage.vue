<template>
  <h3 class="text-primary"> {{ title }}</h3>
  <input type="text" class="form-control mb-2" placeholder="E-mail Address">
  <input type="text" class="form-control mb-2" v-model="referenceNumber">
  <button class="btn btn-sm btn-success">Send!</button>

  <button class="btn btn-sm btn-light" @click="$emit('go-home')">Anasayfaya dön!</button>
</template>

<script>
export default {
  props : [ "title"],
  data(){
    return {
      referenceNumber : null
    }
  },
  mounted(){
    console.log("Contact mounted")
  },
  activated() {
    console.log("Contact activated")
  },
  deactivated() {
    console.log("Contact deactivated")
  }
}
</script>

<style scoped>

</style>
