<template>
  <nav class="fixed w-full z-5">
    <menu-component></menu-component>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer v-show="$route.path !== '/'">
    <div
      class="w-full flex flex-column justify-content-center gap-4 p-4 md:flex-row md:justify-content-between"
    >
      <div class="flex justify-content-center gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          class="text-primary"
          style="text-decoration: solid"
          :href="link.href"
          >{{ link.label }}</a
        >
      </div>
      <small class="text-center"
        >Todos los derechos reservados © UTEL GAMING 2025</small
      >
    </div>
  </footer>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";

export default {
  components: [MenuComponent],
  data() {
    return {
      links: [
        {
          label: "Siempre utel",
          href: "https://siempreutel.utel.edu.mx/",
        },
        {
          label: "Utel universidad",
          href: "https://utel.edu.mx/",
        },
      ],
    };
  },
};
</script>
