<template>
  <div v-for="item in providedPlaceList" :key="item.id" class="col-3 p-2">
    <app-card :item="item" />
  </div>
  <button @click="addItem({ title : 'İstanbul', description : 'Kaos dolu bir şehirden ne beklerseniz hepsi burada. ', link : 'https://www.ibb.gov.tr', image : 'https://picsum.photos/536/354?random=5'})" class="btn-primary btn-sm">Add New Place</button>
</template>
<script>
import appCard from "@/components/appCard"

export default {
  inject : ["providedPlaceList", "addItem"],
  emits : ["name-event"],
  components: {
    appCard
  },
  // methods : {
  //   setName(){
  //     this.$emit("name-evet", "Defne");
  //   }
  // }
}
</script>
