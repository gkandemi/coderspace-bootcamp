<template>
  <div class="card" style="width: 18rem;" :style="{backgroundColor : cardColor}">
    <img :src="item.image" class="card-img-top" alt="...">
    <app-card-details
        :title="item.title"
        :link="item.link"
        :description="item.description"
        :itemId="item.id"
    />
  </div>
</template>
<script>
import appCardDetails from "@/components/appCardDetails"

export default {
  components: {
    appCardDetails
  },
  inject : ["cardColor"],
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
}
</script>
