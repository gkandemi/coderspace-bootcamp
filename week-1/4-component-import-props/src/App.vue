<template>
  <app-header/>

  <div class="container">
    <div class="row">
      <div class="col-8 offset-2">
        <Slider />
      </div>
    </div>

    <div class="row mt-2">
      <div v-for="i in 2" :key="i" class="col-6">
        <Card />
      </div>
    </div>
  </div>

  <app-footer/>
</template>
<script>
import HomeSlider from "@/components/HomePage/HomeSlider"
import HomeCard from "@/components/HomePage/HomeCard";
export default {
  components : {
    Slider : HomeSlider,
    Card : HomeCard
  },
  mounted(){

  }
}
</script>
