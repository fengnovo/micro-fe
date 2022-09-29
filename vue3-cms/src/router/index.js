import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory('/vue3-cms-app')

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
const router = createRouter({
  routes,
  history,
});


export default router;
