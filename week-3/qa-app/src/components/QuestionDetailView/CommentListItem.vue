<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
      }
    }
  }
}
</script>
<template>
  <div class="card text-left mb-3 ms-1 w-100">
    <div class="card-body">
      <div class="mt-3">
        <p class="text-muted" v-html="item.details"></p>
      </div>
    </div>
    <div
        class="card-footer text-muted py-2 question-footer d-flex justify-content-between align-items-center"
    >
      <div class="custom-text-light">
        <i class="fa fa-user-circle me-1"></i>
        {{  _createdAtInfo(item.user?.full_name, item?.created_at, 'cevapladı') }}
      </div>
      <div class="question-action-container">
        <a href="#" class="like-btn text-muted me-2"><i class="fa fa-thumbs-up text-success"></i>(4)</a>
        <a href="#" class="dislike-btn text-muted">
          <i class="fa fa-thumbs-down"></i> (4)
        </a>
      </div>
    </div>
  </div>
</template>
