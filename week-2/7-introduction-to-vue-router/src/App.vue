<template>
  <app-header />
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: 'App',
  components : {
    AppHeader
  }
}
</script>
