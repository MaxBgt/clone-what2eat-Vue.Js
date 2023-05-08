import { createApp } from "vue";
import store from "./store";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "./pages/Home.vue";
import AboutVue from "./pages/About.vue";

const routes = [
  { path: "/", component: HomeVue },
  { path: "/About", component: AboutVue },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import App from "./App.vue";

const VueApp = createApp(App);
VueApp.use(router);
VueApp.use(store);
VueApp.mount("#app");
