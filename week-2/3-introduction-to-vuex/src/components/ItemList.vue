<template>
  <div class="list-group">
    <a
        v-for="item in itemList"
        :key="item.id"
        href="#"
        class="list-group-item list-group-item-action">
      {{ item.text }}
    </a>
    {{ myUser }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ListItem.vue",
  // computed : mapGetters(["_itemList"]),
  // mapGetters({ itemList : "_itemList"}) => {....}
  computed: {
    ...mapGetters({
      itemList: "_itemList",
      myUser : "_currentUser"
    }),
    // customComputed() {}
  }
}
</script>

<style scoped>

</style>
