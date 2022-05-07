<template>
  <router-view name="AppHeader" />
  <router-view/>
</template>
<script>
export default {
  mounted(){
    this.$store.dispatch("initApp")
  }
}
</script>
