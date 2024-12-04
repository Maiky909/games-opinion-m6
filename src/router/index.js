import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Opinions from "../views/Opinions.vue";
import NotFound from "../views/Error404.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/opinions/:id",
    name: "Opinions",
    component: Opinions,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
