<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  },
  computed: {
    createdAtInfo() {
      return this._createdAtInfo(this.item.user.full_name, this.item.created_at)
    },
    commentCount(){
      const count = this.item?.comments?.length || 0;
      return count > 0 ? `${count} cevap` : 'Cevap Yok'
    },
    lastCommentDate(){
      const lastComment = this.item?.comments?.[this.item?.comments.length - 1]
      return lastComment ? this.timesAgo(lastComment.created_at) : "-"
    }
  }
}
</script>
<template>
  <div class="card text-left mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ item.title }}</h5>
        <span><i class="fa fa-heart text-primary"></i></span>
      </div>
      <div class="mt-3">
        <p class="text-muted" v-html="item.details"></p>

        <div class="d-flex justify-content-between align-items-center">
          <div class="custom-text-light">
            <i class="fa fa-user-circle me-1"></i>
            {{ createdAtInfo }}
          </div>
          <div class="custom-text-light">
            {{ item.category.title || "-" }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted py-3 question-footer d-flex justify-content-between align-items-center">
      <div>
              <span class="comment-container">
                <i class="custom-text-light fa fa-user-circle me-1"></i>
                <small class="text-dark">{{ commentCount }}</small>
              </span>
        <span class="custom-seperator"> | </span>
        <small class="custom-text-light">{{ lastCommentDate }}</small>
      </div>
      <button @click="$router.push({ name : 'QuestionDetailView', params : { id : item.id}})"
              class="btn-sm btn btn-primary">Soruyu görüntüle
      </button>
    </div>
  </div>
</template>
