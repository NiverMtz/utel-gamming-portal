<template>
  <div
    class="flex flex-column align-items-center gap-3 justify-content-between p-4 pb-6"
  >
    <div class="flex gap-2">
      <a
        v-for="(item, index) in socialMedia"
        :key="index"
        :href="item.href"
        target="_blank"
        style="color: var(--p-green-700)"
      >
        <font-awesome-icon :icon="item.icon" />
      </a>
    </div>
    <small> Todos los derechos reservados © UTEL GAMING 2025 </small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          icon: ["fab", "facebook"],
          href: "https://www.facebook.com/people/UTEL-GAME/61572997448485/?rdid=tuzphuT16stQNWy4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15KrE6xCU9%2F",
        },
        {
          icon: ["fab", "instagram"],
          href: "https://www.instagram.com/utelgaming/",
        },
        {
          icon: ["fab", "x-twitter"],
          href: "https://x.com/G95998Utel",
        },
        {
          icon: ["fab", "youtube"],
          href: "https://www.youtube.com/watch?v=enrlk0Gz5zI",
        },
        {
          icon: ["fab", "tiktok"],
          href: "https://www.tiktok.com/@utelgaming",
        },
        {
          icon: ["fab", "twitch"],
          href: "https://www.twitch.tv/ugam1ng",
        },
        {
          icon: ["fab", "linkedin"],
          href: "https://mx.linkedin.com/school/uteluniversidad/",
        },
        {
          icon: ["fab", "discord"],
          href: "https://discord.gg/y62hDT2HGk",
        },
      ],
    };
  },
};
</script>
