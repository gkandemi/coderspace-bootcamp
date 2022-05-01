<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6 offset-3">
        <h3>AboutPage</h3>
        <h3>{{ $route.meta.translationKey}}</h3>
        <h4>{{ $route.params.contentID }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

<style scoped>

</style>
