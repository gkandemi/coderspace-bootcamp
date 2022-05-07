<script>
import NewComment from "./NewComment"
import CommentList from "./CommentList"

export default {
  components: {NewComment, CommentList }
}
</script>
<template>
  <div class="card-footer text-muted py-3 question-footer flex-column d-flex justify-content-between align-items-center w-100">
    <!-- Cevap Yaz Bölümü -->
    <NewComment/>
    <!-- /Cevap Yaz Bölümü -->

    <CommentList />
  </div>
</template>
