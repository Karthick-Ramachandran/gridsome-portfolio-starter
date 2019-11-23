<template>
  <Layout>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 xs-12 mb-3"
        v-for="edge in $page.allProject.edges"
        :key="edge.id"
      >
        <div class="card bg rounded">
          <g-image class="img-thumbnail" height="150" width="150" :src="edge.node.image"></g-image>
          <div class="card-body text-center">
            <div class="card-title">
              <b>{{ edge.node.title }}</b>
            </div>
            <p>{{ edge.node.short }}</p>
          </div>
          <div class="row justify-content-center mb-3">
            <div>
              <g-link :to="edge.node.path" class="btn bg-btn">Read More</g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :hasPreviousPage="$page.allProject.pageInfo.hasPreviousPage"
      :hasNextPage="$page.allProject.pageInfo.hasNextPage"
      :currentPage="$page.allProject.pageInfo.currentPage"
    />
  </Layout>
</template>

<page-query>
query Project($page: Int) {
    allProject (perPage: 6, page:$page) @paginate {
    pageInfo{
      currentPage
      totalPages
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        title
        short
        id
        path
        content
        image
      }
    }
  }
}
</page-query>
<script>
import Pagination from "../components/Pagination";
export default {
  // add title of page
  metaInfo: {
    title: "Projects",
    // add meta data
    meta: [{ title: "description", content: "Projects by user" }]
  },
  components: {
    Pagination
  }
};
</script>

<style scoped>
.bg {
  background-color: #f1e7d0;
  transition: box-shadow ease 0.5s;
}

.bg:hover {
  box-shadow: 4px 6px 10px grey;
}

.bg-btn {
  border: 1px solid black;
}
</style>