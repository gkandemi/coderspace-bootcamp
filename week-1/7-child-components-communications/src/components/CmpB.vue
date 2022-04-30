<template>
  <div class="card p-2">
    <h3>{{ title }}</h3>
    <button @click="$emit('change-title', 'Component B Hack Etti')" class="btn btn-primary btn-sm mb-1">Component A Bilgisini Değiştir</button>
    <button @click="$emit('run-event')" class="btn btn-secondary btn-sm">Fonksiyon Çalıştır..</button>
  </div>
</template>

<script>
export default  {
  props : ["title"]
}
</script>
