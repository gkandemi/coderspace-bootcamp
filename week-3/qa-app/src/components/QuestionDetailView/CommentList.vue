<script>
import CommentListItem from "./CommentListItem"

export default {
  inject: ["commentList"],
  components: {CommentListItem},
}
</script>
<template>
  <div class="w-100">
    <h3 class="w-100 text-left">Yorumlar</h3>
    <template v-if="commentList.length > 0">
      <CommentListItem v-for="comment in commentList" :key="comment.id" :item="comment"/>
    </template>
    <AppAlert v-else> Bu Soruya ait bir cevap bulunamadı.</AppAlert>
  </div>
</template>
