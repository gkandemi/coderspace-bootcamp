<template>
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <a :href="link" class="btn btn-primary">Go Website</a>
      <button @click="deleteItem(itemId)" class="btn btn-danger">Sil</button>
    </div>
  </div>
</template>

<script>
export default {
  name : "AppCardDetails",
  inject : ["deleteItem"],
  props : ["title", "description", "link", "itemId"],
}
</script>
