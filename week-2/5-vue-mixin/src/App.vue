<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3 card d-flex justify-content-start align-items-center">
        <input class="form-control mb-1" type="text" v-model="totalAmount">
        Total Amount : <span class="font-weight-bold px-2">
        {{ getCurrencyFormat(totalAmount) }}
        {{ getNumberFormat(totalAmount) }}
        {{ page_size }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
// import helperMixins from "@/mixins/helperMixins";

export default {
  // mixins: [helperMixins],
  name: 'App',
  data() {
    return {
      totalAmount: 12312312313321.45657
    }
  },
  mounted(){
    console.log("App");
  }

}
</script>
