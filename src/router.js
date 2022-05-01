import Vue from "vue";
import Router from "vue-router";
//import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/Login.vue")
    },
    {
      path: "/genres",
      name: "genres",
      component: () => import("./pages/Genres.vue")
    },
    {
      path: "/artists",
      name: "artists",
      component: () => import("./pages/Artists.vue")
    },
    {
      path: "/artist",
      name: "artist",
      component: () => import("./pages/Artist.vue")
    },
    {
      path: "/album",
      name: "album",
      component: () => import("./pages/Album.vue")
    },
    {
      path: "/song",
      name: "song",
      component: () => import("./pages/Song.vue")
    }
  ]
});
