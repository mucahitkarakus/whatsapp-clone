import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "../src/router/index";

import vue3GoogleLogin from "vue3-google-login";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: "523109257112-gmu21h7eit1ikqipkcio7kbas50nb0hl.apps.googleusercontent.com",
});

app.mount("#app");