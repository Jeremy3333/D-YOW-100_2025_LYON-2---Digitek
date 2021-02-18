import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Create from "../views/create.vue";
import Post from "../views/post.vue";
import Profil from "../views/Profil.vue";
import Login from "../views/login.vue";
import Settings from "../views/settings.vue";

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
  },
  {
    path: "/create",
    name: "Create",
    component: Create
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
