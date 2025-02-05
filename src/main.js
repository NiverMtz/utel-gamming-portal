import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { definePreset } from "@primevue/themes";
import Nora from "@primevue/themes/nora";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
    surface: {
      50: "{zinc.50}",
      100: "{zinc.100}",
      200: "{zinc.200}",
      300: "{zinc.300}",
      400: "{zinc.400}",
      500: "{zinc.500}",
      600: "{zinc.600}",
      700: "{zinc.700}",
      800: "{zinc.800}",
      900: "{zinc.900}",
      950: "{zinc.950}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{green.950}",
          inverseColor: "#ffffff",
          hoverColor: "{green.900}",
          activeColor: "{green.800}",
        },
        highlight: {
          background: "{green.950}",
          focusBackground: "{green.700}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
      dark: {
        primary: {
          color: "{zinc.50}",
          inverseColor: "{zinc.950}",
          hoverColor: "{zinc.100}",
          activeColor: "{zinc.200}",
        },
        highlight: {
          background: "rgba(250, 250, 250, .16)",
          focusBackground: "rgba(250, 250, 250, .24)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)",
        },
      },
    },
  },
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

library.add(faTwitch, faGithub, faYoutube, faInstagram, faLinkedin);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
