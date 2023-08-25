import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  }

  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;