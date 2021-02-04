import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/create.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/create",
    name: "create",
    component: Create
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
