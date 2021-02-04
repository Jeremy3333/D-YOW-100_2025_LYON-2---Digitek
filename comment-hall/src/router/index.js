import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/login.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
