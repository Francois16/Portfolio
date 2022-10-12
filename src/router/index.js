import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactMessageView from "../views/ContactMessageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/success",
      name: "success",
      component: ContactMessageView,
      props: { type: "success" },
    },
    {
      path: "/unsuccessful",
      name: "unsuccessful",
      component: ContactMessageView,
      props: { type: "error" },
    },
  ],
});

export default router;
