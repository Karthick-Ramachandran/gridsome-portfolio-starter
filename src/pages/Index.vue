<template>
  <Layout>
    <div class="row">
      <div class="col-md-7 col-sm-12 text-center align-self-center">
        <h3>
          Awesome Dev, Built with
          <span class="text-primary">VueJs</span> and
          <span class="text-primary">Bootstrap</span>
        </h3>
        <h4>With Markdown support.</h4>
      </div>
      <div class="col-md-5 col-sm-12 mt-4">
        <g-image src="../assets/404.svg" blur="100" class="img-fluid rounded"></g-image>
      </div>
    </div>

    <div class="mt-4">
      <h5 class="text-center">
        <b>My Recent Projects</b>
      </h5>
      <div class="row mb-5 mt-4">
        <div
          v-for="edge in $static.allProject.edges"
          :key="edge.node.id"
          class="col-lg-4 col-md-6 xs-12 mb-3"
        >
          <div class="card bg">
            <div class="card-body">
              <div class="card-title text-center">
                <b>{{ edge.node.title }}</b>
              </div>
              <p class="text-center">{{ edge.node.short }}</p>
            </div>
            <div class="row justify-content-center mb-3">
              <div>
                <g-link :to="edge.node.path" class="btn bg-btn">Read More</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h5 class="text-center">
        <b>Find Me</b>
      </h5>
      <div class="row justify-content-center">
        <a href="https://github/karthick-Ramachandran" class="btn social btn-dark">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github
        </a>
        <a href="https://github/karthick-Ramachandran" class="btn social btn-info">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          Linkedin
        </a>
        <a href="https://github/karthick-Ramachandran" class="btn social btn-primary">
          <i class="fa fa-twitter" aria-hidden="true"></i>
          Twitter
        </a>
      </div>
    </div>
  </Layout>
</template>
<static-query>
{
  allProject (limit: 3, order: DESC) {
    edges{
      node {
        id
        title
        short
        path
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
  margin-bottom: 5rem;
}
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
.social {
  margin: 0.5rem;
}
</style>
