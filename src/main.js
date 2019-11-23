// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap"
  });
  Vue.component("Layout", DefaultLayout);
  Vue.use(BootstrapVue);
  head.link.push({
    rel: "stylesheet",
    href: "./assets/app.css"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  });
}
