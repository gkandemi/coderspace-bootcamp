<script>
export default {
  inject: ["onSaveComment"],
  data: () => ({
    userData: {
      details: null
    }
  }),
  methods: {
    onSubmit() {
      this.onSaveComment(this.userData.details);
      this.userData.details = null;
    }
  }
}
</script>
<template>
  <div class="answerArea w-100 mb-3">
    <div class="form-group w-100 mb-1">
      <quill-editor v-model:value="userData.details"/>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button @click="onSubmit" class="btn btn-primary btn-sm">Gönder</button>
    </div>
  </div>
</template>
