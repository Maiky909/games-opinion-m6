import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Opinions from "../views/Opinions.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/opinions/:id",
    name: "Opinions",
    component: Opinions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
