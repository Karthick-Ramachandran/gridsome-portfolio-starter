<template>
  <div>
    <b-navbar class="mt-5 border" type="light" fixed="bottom" variant="white">
      <div class="container">
        <div>&copy; {{ `${$static.metadata.siteName} ${getDate}` }}</div>
        <b-navbar-nav class="ml-auto">
          <!-- put your mail here -->
          <a class="nav-link" href="mailto:yourmail@email.com">Contact</a>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    getDate() {
      const date = new Date();
      return date.getFullYear();
    }
  }
};
</script>