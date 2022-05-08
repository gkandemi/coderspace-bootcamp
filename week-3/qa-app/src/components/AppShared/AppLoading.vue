<script>
import {mapGetters} from "vuex";

export default {
  computed : {
    ...mapGetters({
      loadingState : "loadingState"
    })
  }
}
</script>
<template>
  <div v-if="loadingState" class="loading-container d-flex justify-content-center align-items-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
</template>
