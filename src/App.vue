<template>
  <Toast />
  <nav class="navbar">
    <menu-component></menu-component>
  </nav>
  <main class="main">
    <RouterView />
  </main>
  <footer>
    <footer-component />
  </footer>
  <div class="bottom-line--decoration" />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
  components: [MenuComponent, FooterComponent],
  data() {
    return {
      socialMedia: [
        {
          icon: ["fab", "facebook"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "instagram"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "x-twitter"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "youtube"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "tiktok"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "twitch"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "linkedin"],
          href: "https://www.twitch.tv/ugam1ng",
        },
      ],
    };
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 9999;
}

.main {
  padding-top: 54px;
}

.bottom-line--decoration {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: #030604;
  height: 15px;
}
</style>
