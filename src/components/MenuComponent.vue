<template>
  <Menubar
    :model="items"
    :pt="{
      root: {
        class: 'flex justify-content-end align-items-center',
      },
      itemContent: {
        class: 'lg:text-white',
      },
    }"
  >
    <!-- Logo con enlace al inicio -->
    <template #start>
      <router-link to="/">
        <Avatar
          :image="logo"
          class="w-full flex align-items-center h-1rem md:h-2rem"
        />
      </router-link>
    </template>

    <!-- Elementos del menú -->
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>

    <!-- actions -->
    <template #end>
      <div class="flex gap-2 align-items-center">
        <Button
          icon="pi pi-language"
          :pt="{
            root: {
              style: {
                background: 'transparent',
                border: 'unset',
                color: 'white',
              },
            },
          }"
        />
        <div class="flex gap-2 align-items-center">
          <ToggleSwitch v-model="checked" />
          <span v-if="checked" class="pi pi-moon"></span>
          <span v-else class="pi pi-sun"></span>
        </div>
      </div>
    </template>
  </Menubar>
</template>

<script>
import logo from "../assets/images/utel-gaming-logo.png";
export default {
  data() {
    return {
      logo,
      items: [
        {
          label: "Noticias",
          icon: "pi pi-globe",
          route: "/news",
        },
        {
          label: "Torneos",
          icon: "pi pi-trophy",
          route: "/events",
        },
        {
          label: "Nosotros",
          icon: "pi pi-users",
          route: "/about",
        },
        {
          label: "Herramientas",
          icon: "pi pi-wrench",
          items: [
            {
              label: "Generador de GDD",
              icon: "pi pi-file-pdf",
              route: "/gdd",
            },
          ],
        },
        {
          label: "Sitios UTEL",
          icon: "pi pi-users",
          items: [
            {
              label: "Utel Universidad",
              url: "https://utel.edu.mx/",
              icon: "pi pi-external-link",
            },
            {
              label: "Siempre Utel",
              url: "https://siempreutel.utel.edu.mx/",
              icon: "pi pi-external-link",
            },
          ],
        },
      ],
      checked: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle("my-app-dark");
    },
  },
  watch: {
    checked() {
      this.toggleDarkMode();
    },
  },
};
</script>
