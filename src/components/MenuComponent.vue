<template>
  <div class="card">
    <Menubar
      :model="items"
      :pt="{
        rootList: {
          class: 'justify-content-end w-full',
        },
      }"
    >
      <!-- Logo con enlace al inicio -->
      <template #start>
        <router-link to="/">
          <Avatar
            :image="logo"
            class="w-full flex items-center justify-center mr-2"
          />
        </router-link>
      </template>

      <!-- Elementos del menú -->
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            class="flex items-center"
            v-bind="props.action"
            :href="href"
            @click="navigate"
          >
            <span><i :class="item.icon" class="mr-2"></i>{{ item.label }}</span>
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >
              {{ item.shortcut }}
            </span>
            <i
              v-if="hasSubmenu"
              :class="[
                'pi ml-auto',
                { 'pi-angle-down': root, 'pi-angle-right': !root },
              ]"
            ></i>
          </a>
        </router-link>

        <!-- Elementos sin ruta (submenús) -->
        <a v-else v-ripple class="flex items-center" v-bind="props.action">
          <span><i :class="item.icon" class="mr-2"></i>{{ item.label }}</span>
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >
            {{ item.shortcut }}
          </span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root },
            ]"
          ></i>
        </a>
      </template>

      <!-- Dark mode -->
      <template #end>
        <div class="flex gap-2 align-items-center">
          <ToggleSwitch v-model="checked" />
          <span v-if="checked" class="pi pi-moon"></span>
          <span v-else class="pi pi-sun"></span>
        </div>
      </template>
    </Menubar>
  </div>
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
          label: "Torneos",
          icon: "pi pi-trophy",
          route: "/events",
        },
        {
          label: "Nosotros",
          icon: "pi pi-users",
          route: "/about",
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
