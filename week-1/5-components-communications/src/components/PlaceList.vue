<template>
  <div v-for="item in items" :key="item.id" class="col-3 p-2">
    <!--    <app-card  :title="item.title"  :description="item.description"  :link="item.link" :image="item.image" />-->
    <app-card :item="item" @delete-item="$emit('delete-item', $event)"/>
  </div>
  <button @click="addItem({ name : 'İstanbul', description : 'Kaos', link : 'https://www.ibb.gov.tr', image : 'https://picsum.photos/536/354?random=5'})" class="btn-primary btn-sm">Add New Place</button>
</template>
<script>
import appCard from "@/components/appCard"

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    addItem: Function
  },
  components: {
    appCard
  }
}
</script>
