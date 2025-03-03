<template>
  <div
    :style="bgImage"
    class="flex justify-content-center align-items-center p-4 cover"
  >
    <div class="flex flex-column">
      <h3 class="lg:text-xl">{{ title }}</h3>
      <small class="lg:text-md">{{ description }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    title: String,
    description: String,
    image: String,
  },
  computed: {
    bgImage() {
      return {
        backgroundImage: `linear-gradient(135deg, #030604c3, #131813ad), url(${this.image})`,
      };
    },
  },
};
</script>

<style>
.cover {
  height: 300px;
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}
</style>
