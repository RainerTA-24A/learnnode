import { createApp } from "vue";

import { createWebHistory, createRouter } from "vue-router";

import ToDo from "./pages/ToDo.vue";
import Modals from "./pages/Modals.vue";
import Messages from "./pages/Messages.vue";
import Buttons from "./pages/Buttons.vue";
import ChuckNorris from "./pages/ChuckNorris.vue";
import RickAndMorty from "./pages/RickAndMorty.vue";

const routes = [
  { path: "/", component: ToDo, name: "ToDo_67" },
  { path: "/modals", component: Modals, name: "Modals_laud" },
  { path: "/messages", component: Messages, name: "Messages" },
  { path: "/buttons", component: Buttons, name: "Buttons" },
  { path: "/chuck", component: ChuckNorris, name: 'Chuck Norris' },
  { path: "/rickandmorty", component: RickAndMorty, name: 'Rick and Morty' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// import the root component App from a single-file component.
import App from "./App.vue";
import "./style.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
