<template>
  <div class="banner__container">
    <div
      class="h-full flex flex-column align-items-center mx-3 p-4 lg:mx-8 lg:text-center lg:p-8"
    >
      <h1>Primer Torneo de League Of Legends</h1>
      <Divider></Divider>
      <h2 class="w-15rem align-self-start lg:align-self-center">
        UTEL GAMING 2025
      </h2>
      <p class="w-15rem align-self-start lg:align-self-center lg:w-full">
        Demuestra tu habilidad en la grieta del invocador
      </p>
      <div class="flex flex-column mt-8">
        <small>
          <span class="pi pi-calendar-clock"></span>
          03 de mayo, 9:30am
        </small>
        <small>
          <span class="pi pi-map-marker"></span>
          CDMX
        </small>
        <small>
          <span class="pi pi-users"></span>
          5v5, eliminación directa
        </small>
        <small class="mt-4">
          Habrá grandes premios y certificado de participación
        </small>
      </div>
    </div>
  </div>
  <div
    class="flex flex-column gap-4 mb-6 lg:flex-row lg:justify-content-center lg:gap-6"
  >
    <div class="disclaimer p-4 mx-2 lg:mx-0">
      <h3>Considera lo siguiente antes de realizar tu registro:</h3>
      <p>
        <span class="pi pi-check"></span> Es un sólo registro y lo debe realizar
        el líder del equipo
      </p>
      <p><span class="pi pi-check"></span> Ten a la mano tu Summoner Name.</p>
      <p><span class="pi pi-check"></span> Respeta las reglas del torneo</p>
      <p>
        <span class="pi pi-check"></span> Debes ser parte de la comunidad UTEL
      </p>
      <p>
        <span class="pi pi-check"></span> Registro del 1 al 30 de Abril de 2025
      </p>
    </div>
    <div
      class="register flex flex-column justify-content-center mx-3 my-2 lg:my-6"
    >
      <h2>REGISTRO</h2>
      <h3 class="w-20rem m-0">
        Para inscribirte, llena el formulario con los datos de tu equipo:
      </h3>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe2a8szEtGbi3vj0-FYiipt8IB7H7w1B4JBrbUtRp-LenlcRA/viewform"
        target="_blank"
        class="flex justify-content-center border-round no-underline text-white p-2 my-6"
        style="background: var(--p-green-600)"
      >
        ¡Registrate aquí!
      </a>
      <small class="w-20rem text-center" style="margin: 0 auto">
        Sigue todos los detalles del torneo en nuestro canal de
        <a
          href="https://discord.gg/y62hDT2HGk"
          target="_blank"
          style="color: var(--p-green-600)"
          class="no-underline"
        >
          discord
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>
      </small>
    </div>
  </div>
</template>

<script>
import ImageCardComponent from "@/components/ImageCardComponent.vue";

export default {
  components: [ImageCardComponent],
};
</script>

<style>
small {
  margin: 0;
}
.banner__container {
  background-image: linear-gradient(135deg, #030604c3, #131813ad),
    url("../assets/images/LoL_wp.jpg");
  background-size: cover;
  height: 100vh;
  color: white;
  z-index: -1;
}
.disclaimer {
  background-color: var(--p-green-600);
  color: white;
  margin-top: -24px;
}
.register {
}
</style>
