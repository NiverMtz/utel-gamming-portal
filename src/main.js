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
  faFacebook,
  faTiktok,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Form } from "@primevue/forms";
import { ToastService } from "primevue";

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
    colorScheme: {
      light: {
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
      },
    },
  },
  components: {
    menubar: {
      root: {
        background: "{green.700}",
        borderRadius: "unset",
        borderColor: "transparent",
      },
      mobile: {
        button: {
          color: "{zinc.100}",
        },
      },
    },
  },
});

library.add(
  faTwitch,
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin,
  faLink,
  faFacebook,
  faTiktok,
  faXTwitter,
  faDiscord
);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".my-app-dark",
    },
  },
});
app.use(ToastService);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
