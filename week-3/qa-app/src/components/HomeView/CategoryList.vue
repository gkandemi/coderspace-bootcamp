<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      categoryList: "categories/categoryList",
      isAuthenticated : "users/isAuthenticated"
    })
  }
}
</script>
<template>
  <div class="col-2">
    <div v-if="isAuthenticated" class="d-grid gap-2 mb-3">
      <button @click="$router.push({ name : 'NewQuestionView'})" class="btn btn-primary d-flex justify-content-between align-items-center">
        <span>Soru Sor</span>
        <i class="fa fa-edit"></i>
      </button>
    </div>
    <div class="list-group">
      <a v-for="category in categoryList"  :key="category.id" href="#" class="active list-group-item list-group-item-action d-flex justify-content-between align-items-center category-item" aria-current="true">
        <div>
          <i class="fa fa-hashtag custom-text-light me-2"></i>
          <span> {{  category.title }} </span>
        </div>
        <i class="check-icon fa fa-check-circle"></i>
      </a>
    </div>
  </div>
</template>
