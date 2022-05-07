<script>
import {mapGetters} from "vuex";
import CommentSection from "@/components/QuestionDetailView/CommentSection"

export default {
  components: {CommentSection},
  data() {
    return {
      question: null,
      isLoaded: false,
      userData: {
        question: {
          details: null,
        },
        comment: {
          details: null,
        }
      },
      editMode: false,
      provideData: {
        commentList: []
      }
    }
  },
  provide() {
    return {
      onSaveComment: this.onSaveComment,
      commentList: this.provideData.commentList
    }
  },
  methods: {
    fetchQuestion() {
      return this.$appAxios.get(`/questions?id=${this.$route.params.id}&_expand=category&_expand=user`).then(({data: questionData}) => {
        this.question = questionData[0] || {}
        this.userData.question.details = this.question.details;
      })
    },
    updateQuestion() {
      this.$appAxios.patch(`/questions/${this.$route.params.id}`, this.userData.question).then(({data: questionData}) => {
        this.question.details = questionData.details;
        this.editMode = false;
      })
    },
    onSaveComment(details) {
      const userData = {
        details,
        userId: this.currentUser.id,
        questionId: this.question.id,
        created_at: new Date()
      }
      this.$appAxios.post("/comments", userData).then(({ data : comment }) => {
        this.provideData.commentList.push(comment);
      })
    },
    fetchComments() {
      this.$appAxios.get(`/comments?questionId=${this.question.id}&_expand=user`).then(({data: commentList}) => {
        this.provideData.commentList.push(...commentList)
        this.isLoaded = true;
      })
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchQuestion().then(() => {
        this.fetchComments()
      })
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser"
    }),
    isUserQuestionOwner() {
      return this.currentUser?.id === this.question?.userId
    },
    createdAtInfo() {
      return this._createdAtInfo(this.question.user.full_name, this.question.created_at)
    }
  }
}
</script>
<template>
  <div v-if="isLoaded" class="container question-detail-page">
    <div class="row mt-3">
      <div class="col-10 offset-1">
        <div class="card text-left mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center w-100">
              <h3 class="card-title">{{ question?.title || "-" }}</h3>
              <span v-if="isUserQuestionOwner && !editMode">
                  <a @click="editMode = true" class="btn btn-link text-primary pe-0">
                    <i class="fa fa-edit"></i> Düzenle
                  </a>
                </span>
            </div>
            <div class="mt-3">
              <div v-if="editMode" class="form-group mb-3">
                <quill-editor v-model:value="userData.question.details"/>
                <div class="button-action-container mt-2 d-flex justify-content-end align-items-center">
                  <button @click="editMode = false" class="btn btn-sm btn-secondary me-1">İptal</button>
                  <button @click="updateQuestion" class="btn btn-sm btn-primary">Düzenle</button>
                </div>
              </div>
              <p v-else class="text-muted" v-html="question.details"></p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  {{ createdAtInfo }}
                </div>
                <div class="custom-text-light">
                  {{ question.category.title }}
                </div>
              </div>
            </div>
          </div>
          <CommentSection/>
        </div>
      </div>
    </div>
  </div>
</template>
