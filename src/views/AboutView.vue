<template>
  <div
    class="p-6 md:p-0 md:flex md:justify-content-center md:align-items-center lg:justify-content-right banner"
  >
    <div
      class="md:text-center lg:text-left md:p-0 md:py-8 md:w-24rem lg:w-full"
    >
      <div class="lg:p-8 lg:mt-8 lg:flex lg:align-items-center lg:gap-4">
        <div class="lg:flex lg:flex-column">
          <div>QUIENES SOMOS</div>
          <h1 style="width: 100%; max-width: 500px">
            LOS VIDEOJUEGOS SON PARTE DE LA VIDA UNIVERSITARIA
          </h1>
          <div class="lg:w-24rem">
            <small class="hidden lg:block">
              Nuestras iniciativas ofrecen experiencias únicas que combinan
              diversión, aprendizaje y bienestar, creando un ambiente donde los
              estudiantes pueden recargar energías y conectar con sus intereses
              fuera del aula.
            </small>
          </div>
        </div>
        <div class="block lg:hidden">
          Nuestras iniciativas ofrecen experiencias únicas que combinan
          diversión, aprendizaje y bienestar, creando un ambiente donde los
          estudiantes pueden recargar energías y conectar con sus intereses
          fuera del aula.
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-column py-4">
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
  },
  mounted() {
    this.getAboutUs();
  },
};
</script>

<style>
.banner {
  background-image: linear-gradient(135deg, #030604, #10d81d6a),
    url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JzajRvNHg3YzNiYWdncHQ5b3ZieW04cWF0cGp0em9yODJqNjRlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AdiUiBj8Q3LmVGpy5F/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  @media screen and (min-width: 960px) {
    height: 70vh;
  }
}
</style>
