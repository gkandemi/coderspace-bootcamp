<template>
  <div class="container text-center card">
    <h3>{{ counter }}</h3>
    <div class="d-flex justify-content-center align-items center">
      <button @click="counter--" class="btn btn-danger me-1">-</button>
      <button @click="counter++" class="btn btn-success">+</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      counter : 0
    }
  }
}
</script>
