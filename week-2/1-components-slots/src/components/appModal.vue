<template>
  <div class="row mt-5">
    <div class="col-6 offset-3 card">
      <header>
        <slot name="header"></slot>
      </header>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "appModal.vue"
}
</script>

<style scoped>

</style>
