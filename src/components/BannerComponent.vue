<template>
  <div class="banner__container">
    <div class="banner__content text-center lg:text-left">
      <h3>Bienvenido a tu espacio gamer</h3>
      <h1>SOMOS UTEL GAMING</h1>
      <small class="md:text-xl md:w-24rem">
        Descubre nuestros proyectos, conoce nuestro equipo y únete a la
        aventura.
      </small>
      <a
        href="https://linktr.ee/UtelGaming"
        target="_blank"
        class="flex justify-content-center border-round no-underline text-white p-2 my-8 md:w-10rem"
        style="background: var(--p-green-600)"
      >
        Síguenos
      </a>
    </div>
    <div class="banner__image hidden lg:block">
      <img src="../assets/images/utel-hero-girl-gamming.png" alt="Imagen" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  @media screen and (min-width: 760px) {
    width: 100%;
    font-size: 3rem;
  }
}

h3 {
  align-self: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 200px;
  margin-bottom: 2rem;
  @media screen and (min-width: 760px) {
    width: 100%;
    align-self: flex-start;
  }
}

.banner__container {
  background-image: var(--brand-gradient),
    url("../assets/images/utel-bg-home-mobile.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  margin-top: -96px;
  gap: 96px;
  color: white;
  @media screen and (min-width: 760px) {
    flex-direction: row;
    background-image: var(--brand-gradient), var(--image-home);
  }
}
.banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  @media screen and (min-width: 760px) {
    padding: 0;
    justify-content: center;
  }
}
.banner__image {
  width: 200px;
  @media screen and (min-width: 760px) {
    width: 500px;
  }
}
.banner__image img {
  max-width: 100%;
}
</style>
