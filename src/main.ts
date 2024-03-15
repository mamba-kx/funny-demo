import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import router from "./router/index";
import App from "./App.vue";

const store = createPinia();

const app = createApp(App);
app.use(store).use(router);
app.mount("#app");
