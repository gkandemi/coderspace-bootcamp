<template>
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <a :href="link" class="btn btn-primary">Go Website</a>
      <button @click="deleteItem" class="btn btn-danger">Sil</button>
    </div>
  </div>
</template>

<script>
export default {
  name : "AppCardDetails",
  props : ["title", "description", "link", "itemId"],
  methods : {
    deleteItem(){
      // Custom Event
      this.$emit("delete-item", this.itemId)
    }
  }
}
</script>
