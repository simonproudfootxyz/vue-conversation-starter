import Vue from "vue";
import Router from "vue-router";

import ThreadList from "./components/ThreadList.vue";
import Thread from "./components/Thread.vue";

Vue.use(Router);
// Tells Vue to use our Router

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: ThreadList
    },
    {
      path: "/thread/:id",
      name: "thread",
      component: Thread,
      props: true
    }
  ]
});
