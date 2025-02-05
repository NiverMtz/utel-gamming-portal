<template>
  <div class="banner">
    <div class="content">
      <h2 class="m-0 mt-6 text-sm md:text-xl xl:text-3xl font-light">
        Te damos la bienvenida a
      </h2>
      <h1 class="m-0 text-4xl md:text-8xl">UTEL GAMING</h1>
      <div class="flex gap-5 mt-8">
        <a href="https://www.twitch.tv/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'twitch']"
            size="2xl"
            class="cursor-pointer"
            style="color: white"
          />
        </a>
        <a href="https://github.com/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'github']"
            size="2xl"
            class="cursor-pointer"
            style="color: white"
          />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            size="2xl"
            class="cursor-pointer"
            style="color: white"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            size="2xl"
            class="cursor-pointer"
            style="color: white"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="2xl"
            class="cursor-pointer"
            style="color: white"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  height: 100vh;
  background-image: linear-gradient(135deg, #030604, #10d81d6a),
    url("../assets/images/banner-bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 960px) {
    justify-content: start;
  }
  color: white;
}

.content {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 960px) {
    padding: 4rem;
    padding-left: 10rem;
    max-width: 40vw;
  }
}

.title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #6a11cb;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #f0f0f0;
}
</style>
