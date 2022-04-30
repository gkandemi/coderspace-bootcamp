<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6 offset-3 text-center">
        <button @click="activePage = 'HomePage'" class="btn btn-sm btn-primary me-1">Home</button>
        <button @click="activePage = 'AboutPage'" class="btn btn-sm btn-primary me-1">About</button>
        <button @click="activePage = 'ContactPage'" class="btn btn-sm btn-primary">Contact</button>
      </div>
      {{ activePage }}
    </div>

    <div class="row mt-3">
      <div class="col-6 offset-3 card">
        <!--        Component Alanı-->
<!--        <HomePage v-if="activePage === 'HomePage'"/>-->
<!--        <AboutPage v-else-if="activePage === 'AboutPage'"/>-->
<!--        <ContactPage v-else/>-->
        <keep-alive>
          <component :is="activePage" title="Bu bir başlık.." @go-home="activePage = 'HomePage'" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";

export default {
  components: {
    HomePage, AboutPage, ContactPage
  },
  data() {
    return {
      activePage: "HomePage"
    }
  }
}

</script>
