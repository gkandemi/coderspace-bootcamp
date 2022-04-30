<template>
  <div class="container">
    <div class="row py-5">
      <div class="col">
        <appCounter></appCounter>
      </div>
      <div class="col">
        <appCounter />
      </div>
      <div class="col">
        <app-counter></app-counter>
      </div>
    </div>
  </div>
</template>
<script>
import appCounter from "@/components/appCounter"
export default {
  components : {
    // "pogaca" : appCounter,
     appCounter
  }
}
</script>
