<template>
  <div class="card p-2">
    <h3>{{ title }}</h3>
    <button @click="$emit('change-title', 'Component A Hack Etti')" class="btn btn-danger btn-sm">Component B Bilgisini
      Değiştir
    </button>
  </div>
</template>

<script>
export default {
  props: ["title", "run"],
  watch: {
    run(isRun) {
      console.log(isRun)
      if (isRun) {
        alert("Çalışmaya Başladı...");
        // this.methodName();
      }
    }
  }
}
</script>
