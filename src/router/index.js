import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/homepage/HomeNavIcons.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sideNav",
    name: "sideNav",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: () => import("../views/SideNav.vue"),
    children: [
      {
        path: "/inventor",
        component: () => import("../views/Forms/Inventor.vue"),
        // component: Inventor,
      },
      {
        path: "/accounts",
        // component: () => import("../views/Forms/Inventor.vue"),
        component: () => import("../views/Forms/Accounts.vue"),
      },
      {
        path: "/contacts",
        component: () => import("../views/Forms/Contacts.vue"),
      },
      {
        path: "/budjects",
        component: () => import("../views/Forms/Budjects.vue"),
      },

      {
        path: "/measurements",
        component: () => import("../views/Forms/Measurements.vue"),
      },
      {
        path: "/access",
        component: () => import("../views/Forms/Access.vue"),
      },
      {
        path: "/geo",
        component: () => import("../views/Forms/Geo.vue"),
      },
      {
        path: "/expectations",
        component: () => import("../views/Forms/Expectations.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
