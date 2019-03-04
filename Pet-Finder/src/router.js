import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import resources from "./views/Resources.vue";
import findpet from "./views/FindPet.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/resources",
      name: "resources",
      component: resources
    },

    {
      path: "/findpet",
      name: "findpet",
      component: findpet
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
