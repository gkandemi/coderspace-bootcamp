<template>
  <div class="card" style="width: 18rem;">
    <img :src="item.image" class="card-img-top" alt="...">
    <app-card-details
        :title="item.title"
        :link="item.link"
        :description="item.description"
        :itemId="item.id"
        @delete-item="$emit('delete-item', $event)"
    />
<!--        @delete-item="getMessage"-->
<!--    {{ message }}-->
  </div>
</template>
<script>
import appCardDetails from "@/components/appCardDetails"

export default {
  components: {
    appCardDetails
  },
  // props : ["title", "description", "link", "image"],
  props: {
    // title: {
    //   type: String,
    //   required: false,
    //   default: "Country"
    // },
    // description: String,
    // link: String,
    // image: String, // String, Number, Boolean, Function, Array, Object,
    item: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  data() {
    return {
      // message: null
      // title : null,
      // description : null,
      // link : null
    }
  },
  methods: {
    // getMessage(e){
    //     console.log(e);
    //     this.$emit("delete-item", e)
    // }
    // getTitle(){
    //   alert(this.title)
    // }
  }
}
</script>
