<template>
  <div class="banner md:flex md:justify-content-center md:align-content-center">
    <div
      class="p-8 text-white md:text-center md:p-0 md:py-8 md:w-24rem lg:mt-8"
    >
      <div>QUIENES SOMOS</div>
      <h1>LOS VIDEOJUEGOS SON PARTE DE LA VIDA UNIVERSITARIA</h1>
      <div>
        Nuestras iniciativas ofrecen experiencias únicas que combinan diversión,
        aprendizaje y bienestar, creando un ambiente donde los estudiantes
        pueden recargar energías y conectar con sus intereses fuera del aula.
      </div>
    </div>
  </div>
  <div class="flex flex-column">
    <h2 class="align-self-center">EJES DE ACCIÓN</h2>
    <div
      class="element flex flex-column gap-4 mx-4 md:flex-row"
      :style="{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }"
    >
      <div
        class="cover img-1 flex justify-content-center align-items-center p-4"
      >
        <div class="flex flex-column">
          <h3>E-sports</h3>
          <small
            >Organización y formación de equipos para competir en torneos,
            atrayendo nuevos usuarios y fortaleciendo la presencia de la
            universidad</small
          >
        </div>
      </div>
      <div
        class="cover img-2 flex justify-content-center align-items-center p-4"
      >
        <div class="flex flex-column">
          <h3>Noticias</h3>
          <small
            >Publicamos convocatorias, anunciamos torneos y compartimos las
            últimas tendencias en el mundo de los videojuegos</small
          >
        </div>
      </div>
      <div
        class="cover img-3 flex justify-content-center align-items-center p-4"
      >
        <div class="flex flex-column">
          <h3>Diseño de videojuegos</h3>
          <small
            >Proporcionamos herramientas intuitivas para crear documentos de
            diseño de videojuegos de manera sencilla y profesional</small
          >
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-column">
    <h2 class="align-self-center">NUESTRO EQUIPO</h2>
    <div class="flex flex-wrap justify-content-center gap-4 m-4">
      <Card
        v-for="(item, index) in team"
        :key="index"
        style="padding-top: 2rem; text-align: center; width: 300px"
      >
        <template #header>
          <Avatar
            :image="item.image"
            size="xlarge"
            shape="circle"
            :pt="{
              image: (options) => ({
                style: {
                  'object-fit': 'cover',
                },
              }),
            }"
          />
        </template>
        <template #title>{{ item.name }}</template>
        <template #subtitle>{{ item.rol }}</template>
        <template #content>
          <p class="m-0">{{ item.description }}</p>
        </template>
        <template #footer>
          <div class="flex justify-content-center gap-4 mt-4">
            <a :href="item.primary_link" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                size="2xl"
                class="cursor-pointer"
              />
            </a>
            <a :href="item.secondary_link" target="_blank">
              <font-awesome-icon
                :icon="['fas', 'link']"
                size="2xl"
                class="cursor-pointer"
              />
            </a>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import GoogleSheetsService from "@/services/GoogleSheetsService";

export default {
  data() {
    return {
      team: [],
      isVisible: false,
    };
  },
  methods: {
    async getAboutUs() {
      let response = await GoogleSheetsService.getAboutUsTeam();
      this.team = response.data;
    },
    handleScroll() {
      const elementTop = document
        .querySelector(".element")
        .getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      this.isVisible = elementTop < windowHeight * 0.75; // Ajusta este valor para controlar el punto de activación
    },
  },
  mounted() {
    this.getAboutUs();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.banner {
  background-image: linear-gradient(135deg, #030604, #10d81d6a),
    url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JzajRvNHg3YzNiYWdncHQ5b3ZieW04cWF0cGp0em9yODJqNjRlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AdiUiBj8Q3LmVGpy5F/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.cover {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  height: 300px;
  width: 100%;
}
.img-1 {
  background-image: linear-gradient(135deg, #030604c3, #131813ad),
    url("https://images.pexels.com/photos/7862594/pexels-photo-7862594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
.img-2 {
  background-image: linear-gradient(135deg, #030604c3, #131813ad),
    url("https://images.pexels.com/photos/7046723/pexels-photo-7046723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}
.img-3 {
  background-image: linear-gradient(135deg, #030604c3, #131813ad),
    url("https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}

.element {
  opacity: 0;
  transform: translateY(50px);
}
</style>
