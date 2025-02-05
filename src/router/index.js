import { createRouter, createWebHistory } from "vue-router";

import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NewsView from "@/views/NewsView.vue";
import EventsView from "@/views/EventsView.vue";
import GDDView from "@/views/GDDView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/news", component: NewsView },
  { path: "/events", component: EventsView },
  { path: "/gdd", component: GDDView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
