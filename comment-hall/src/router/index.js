import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import Index from "../views/Index.vue";
=======
import Index from "../veiw/Index.vue";
>>>>>>> 223a214b31e31d9ad5d88db33d53b51de02e7b8d

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
