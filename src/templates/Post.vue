<template>
  <Layout>
    <h4 class="text-center">{{ $page.post.title }}</h4>
    <p class="text-center">
      <b>Date: {{ $page.post.date }} | {{ $page.post.timeToRead }} Mins Read</b>
    </p>
    <div>
      <g-image class="img-fluid img" :src="$page.post.image" />
    </div>
    <div class="markdown-body" v-html="$page.post.content"></div>
  </Layout>
</template>


<page-query>
query ($path: String!){
  post (path: $path) {
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
      title: this.$page.post.title
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
  margin: 2rem !important;
}
</style>