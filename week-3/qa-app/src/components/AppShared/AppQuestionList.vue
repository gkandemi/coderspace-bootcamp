<template>
  <template v-if="list.length > 0">
    <AppQuestionListItem v-for="item in list" :key="item.id" :item="item"/>
  </template>
  <AppAlert v-else>Bu Kategori(lere) ait bir soru bulunamadı. Soru sormak için <a href="#">tıklayınız</a></AppAlert>
</template>
<script>
import AppQuestionListItem from "@/components/AppShared/AppQuestionListItem";

export default {
  components: {AppQuestionListItem},
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
