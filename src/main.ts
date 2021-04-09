import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import { setupI18n } from "./i18n";
import { fallbackImg } from "./shared/directives";
import de from "./assets/i18n/de-DE.json";

const app = createApp(App);

const i18n = setupI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "de",
  messages: {
    de,
  },
});

app.directive("img-fallback", fallbackImg);

app.use(i18n).use(router).use(store).mount("#app");
