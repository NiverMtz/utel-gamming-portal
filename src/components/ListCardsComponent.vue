<template>
  <div
    :style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'opacity 0.5s ease, transform 0.5s ease',
    }"
    class="flex flex-column gap-4 lg:flex-row element"
  >
    <ImageCardComponent
      v-for="(item, index) in posts"
      :key="index"
      :title="item.title"
      :description="item.description"
      :image="item.image"
    />
  </div>
</template>

<script>
import ImageCardComponent from "./ImageCardComponent.vue";

export default {
  components: { ImageCardComponent },
  props: { posts: Array },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleScroll() {
      const elementTop = document
        .querySelector(".element")
        .getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      this.isVisible = elementTop < windowHeight * 0.75; // Ajusta este valor para controlar el punto de activación
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.element {
  opacity: 0;
  transform: translateY(50px);
}
</style>
