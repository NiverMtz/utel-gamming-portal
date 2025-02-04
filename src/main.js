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
  semantic: {
    primary: {
      50: "{green.50}",
      100: "{green.100}",
      200: "{green.200}",
      300: "{green.300}",
      400: "{green.400}",
      500: "{green.500}",
      600: "{green.600}",
      700: "{green.700}",
      800: "{green.800}",
      900: "{green.900}",
      950: "{green.950}",
    },
  },
  components: {
    menubar: {
      root: {
        background: "{primary.500}",
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
  },
});

app.mount("#app");
