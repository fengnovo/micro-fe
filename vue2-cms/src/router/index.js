import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "首页",
      index: 0,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "首页",
      index: 0,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
    meta: {
      title: "详情页",
      index: 1,
    },
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import("../pages/Tab.vue"),
    meta: {
      title: "Tab页",
      index: 2,
    },
  },
];
const router = new VueRouter({
  routes,
  base: '/vue2-cms-app',
  mode: 'hash',
});

export default router;
