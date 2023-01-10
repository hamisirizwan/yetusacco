import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/home",
      name: "home",
      component: () => HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: () => RegisterPage,
    },
  ],
});

export default router;
