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
    children: [
      {
        path: "information",
        name: "information",
        component: () => import("../views/information/information.vue"),
      },
      {
        path: "shop/list",
        name: "shop_list",
        component: () => import("../views/shop/list.vue"),
      },
      {
        path: "shop/create",
        name: "shop_create",
        component: () => import("../views/shop/create.vue"),
      },
      {
        path: "shop/detail",
        name: "shop_detail",
        component: () => import("../views/shop/detail.vue"),
      },
    ]
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/getotp",
    name: "getotp",
    component: () => import("../views/getotp.vue"),
  },

  // {
  //   path: "/shop",
  //   name: "shop",

  //   children: [
  //     {
  //       path: "list",
  //       name: "shop_list",
  //       component: () => import("../views/shop/list.vue"),
  //     },
  //   ]
  // },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;