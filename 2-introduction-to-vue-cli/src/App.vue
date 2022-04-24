<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button class="btn btn-primary" @click="changeTitle"> Başlık Değiştir</button>
    {{ titleStatus }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Bu Vue Instance Tarafından Set Edilmiş bir Başlık",
      description: "Bu bir açıklamadır yemin ederim."
    }
  },
  methods: {
    changeTitle() {
      this.title = "Bu Değiştirilmiş Bir Başlıktır."
    }
  },
  computed: {
    titleStatus() {
      return this.title !== "Bu Vue Instance Tarafından Set Edilmiş bir Başlık" ? "Başlık Değişti" : "Başlık Aynı";
    }
  },
  mounted(){
    console.log("Mounted Çalıştı...")
  }
}
</script>
