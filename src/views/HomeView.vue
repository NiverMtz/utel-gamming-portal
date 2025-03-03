<template>
  <BannerComponent />
  <div class="m-4">
    <CitationComponent />
    <ListCardsComponent :posts="homePosts" />
    <PartnersComponent />
  </div>
</template>

<script>
import BannerComponent from "@/components/BannerComponent.vue";
import CitationComponent from "@/components/CitationComponent.vue";
import ListCardsComponent from "@/components/ListCardsComponent.vue";
import PartnersComponent from "@/components/PartnersComponent.vue";
export default {
  components: [
    BannerComponent,
    PartnersComponent,
    ListCardsComponent,
    CitationComponent,
  ],
  data() {
    return {
      isVisible: false,
      homePosts: [
        {
          title: "E-Sports",
          description: `Organización y formación de equipos para competir en torneos,
            atrayendo nuevos usuarios y fortaleciendo la presencia de la
            universidad`,
          image:
            "https://images.pexels.com/photos/7862594/pexels-photo-7862594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Noticias",
          description: `Publicamos convocatorias, anunciamos torneos y compartimos las
            últimas tendencias en el mundo de los videojuegos`,
          image:
            "https://images.pexels.com/photos/7046723/pexels-photo-7046723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Diseño de videojuegos",
          description: `Proporcionamos herramientas intuitivas para crear documentos de
            diseño de videojuegos de manera sencilla y profesional`,
          image:
            "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    };
  },
};
</script>
