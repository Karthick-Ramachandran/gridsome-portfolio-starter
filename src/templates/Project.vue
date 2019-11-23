<template>
  <Layout>
    <h4 class="text-center">{{ $page.project.title }}</h4>
    <p class="text-center">
      <b>Date: {{ $page.project.date }} | {{ $page.project.timeToRead }} Mins Read</b>
    </p>
    <div>
      <g-image class="img-fluid img" :src="$page.project.image" />
    </div>
    <div class="markdown-body" v-html="$page.project.content"></div>
  </Layout>
</template>


<page-query>
query ($path: String!){
  project (path: $path) {
    title
    content
    timeToRead
    date
    image
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    };
  }
};
</script>

<style scoped>
.img {
  display: block;
  margin: 0 auto;
  height: 50%;
  width: 50%;
}

.markdown-body {
  margin-bottom: 6rem;
}
pre {
  margin: 1rem !important;
}
</style>