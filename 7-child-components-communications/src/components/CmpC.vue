<template>
  <div class="card p-2">
    <h3>{{ componentCTitle }}</h3>
    <button @click="$emit('change-title', 'Component C Hack Etti')" class="btn btn-danger btn-sm">Component D Bilgisini
      Değiştir
    </button>
  </div>
</template>

<script>
export default {
  props: ["run"],
  inject : ["componentCTitle"],
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
