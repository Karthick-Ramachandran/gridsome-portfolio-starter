<template>
  <div>
    <!-- navbar -->
    <b-navbar class="mb-3 nav-bottom" toggleable="lg" type="light" stick="true" variant="white">
      <div class="container">
        <b-navbar-brand href="/">{{ $static.metadata.siteName }}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <g-link class="nav-link" to="/about">About me</g-link>
            <g-link class="nav-link" to="/projects">Projects</g-link>
            <g-link class="nav-link" to="/blogs">Blog</g-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <!-- navbar -->
    <!-- slot with transition -->
    <transition name="fade" appear>
      <main class="container">
        <slot />
      </main>
    </transition>
    <!--  -->
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  components: {
    Footer
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="../assets/app.css">
</style>
