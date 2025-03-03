<template>
  <ImageCardComponent title="Torneo de League Of Legends" :image="image" />
</template>

<script>
import ImageCardComponent from "@/components/ImageCardComponent.vue";

export default {
  components: [ImageCardComponent],
  data() {
    return {
      image: "../assets/images/LoL_wp.jpg",
    };
  },
};
</script>
