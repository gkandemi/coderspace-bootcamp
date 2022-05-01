<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Gürmen</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{ name : 'HomePage'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" :to="{ name : 'AboutPage'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link"
                         :to="{ name : 'ContactPage' }">Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>
