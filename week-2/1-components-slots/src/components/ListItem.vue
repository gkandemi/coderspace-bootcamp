<template>
  <a :key="item.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
    <div class="title"> {{ item.title }} </div>
    <div class="content" v-html="item.content"></div>
  </a>
</template>

<script>
export default {
  name: "ListItem.vue",
  props : {
    item : Object
  }
}
</script>
