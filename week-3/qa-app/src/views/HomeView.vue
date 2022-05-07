<script>
import CategoryList from "@/components/HomeView/CategoryList"
import AppQuestionList from "@/components/AppShared/AppQuestionList";

export default {
  components: {
    AppQuestionList,
    CategoryList
  },
  data:()=>({
    questionList : []
  }),
  mounted() {
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions() {
      // _expand=category => questions array'inde categoryId = categories araması yapıp dokümani buraya ekliyor..
      this.$appAxios.get("/questions?_expand=category&_expand=user&_embed=comments").then(({ data : questionList }) => {
        this.questionList = questionList ||[];
      })
    }
  }
}
</script>
<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- KATEGORI -->
      <CategoryList/>
      <!-- KATEGORI -->

      <!-- SORULAR -->
      <AppQuestionList :list="questionList"/>
      <!-- !SORULAR -->
    </div>
  </div>
</template>
