<template>
  <div class="flex flex-column align-items-center gap-4 my-4">
    <p>Un proyecto en colaboración con</p>
    <div
      class="flex flex-column gap-8 align-items-center lg:flex-row lg:justify-content-center"
    >
      <a
        v-for="(partner, index) in partners"
        :key="index"
        :href="partner.url"
        target="_blank"
      >
        <img :src="partner.image" class="max-w-full h-4rem" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          url: "https://utel.edu.mx/",
          image:
            "https://utel.edu.mx/_next/image?url=https%3A%2F%2Fcmsutel.s3.amazonaws.com%2FGroup_710dc02780.svg&w=750&q=75",
        },
        {
          url: "https://siempreutel.utel.edu.mx/",
          image:
            "https://d11jve6usk2wa9.cloudfront.net/platform/31823/assets/logo.png?v=cb73e698-c044-436a-a230-f71513af87f4",
        },
      ],
    };
  },
};
</script>
