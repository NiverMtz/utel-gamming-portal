<template>
  <nav>
    <menu-component></menu-component>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
import MenuComponent from "./components/MenuComponent.vue";

export default {
  components: [MenuComponent],
};
</script>
