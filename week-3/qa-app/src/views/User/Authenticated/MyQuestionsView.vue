<script>
import AppQuestionList from "@/components/AppShared/AppQuestionList";
import {mapGetters} from "vuex";

export default {
  components: {AppQuestionList},
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser"
    })
  },
  data: () => ({
    questionList: []
  }),
  mounted() {
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions() {
      this.$appAxios.get(`/questions?userId=${this.currentUser.id}&_expand=category&_expand=user&_embed=comments&_embed=favorites`).then(({data: questionList}) => {
        this.questionList = questionList || [];
      })
    }
  }
}
</script>
<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <!-- SORULAR -->
      <div class="col-6 offset-3">
        <AppQuestionList :list="questionList"/>
      </div>
      <!-- !SORULAR -->
    </div>
  </div>
</template>
