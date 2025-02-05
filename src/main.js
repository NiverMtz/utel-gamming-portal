import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { definePreset } from "@primevue/themes";
import Nora from "@primevue/themes/nora";

const app = createApp(App);

const MyPreset = definePreset(Nora, {
  components: {
    menubar: {
      root: {
        background: "{green.500}",
        borderRadius: "unset",
        padding: "0.5rem 3rem",
      },
    },
  },
});

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});

app.mount("#app");
