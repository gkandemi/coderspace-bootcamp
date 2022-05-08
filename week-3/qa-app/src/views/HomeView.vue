<script>
import CategoryList from "@/components/HomeView/CategoryList"
import AppQuestionList from "@/components/AppShared/AppQuestionList";
import {mapGetters} from "vuex";

export default {
  components: {
    AppQuestionList,
    CategoryList
  },
  mounted() {
   this.$store.dispatch("questions/fetchList");
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser",
      questionList : "questions/questionList"
    })
  }
}
</script>
<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- KATEGORI -->
      <CategoryList />
      <!-- KATEGORI -->

      <!-- SORULAR -->
      <div class="col-10">
        <AppQuestionList :list="questionList"/>
      </div>
      <!-- !SORULAR -->
    </div>
  </div>
</template>
