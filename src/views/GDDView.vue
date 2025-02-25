<template>
  <h1 class="p-8 m-0 text-left">UTEL GDD</h1>
  <div class="formulario">
    <transition name="fade" mode="out-in">
      <div v-if="currentQuestionIndex !== null" key="question">
        <h2>{{ questions[currentQuestionIndex].text }}</h2>
        <Select
          v-model="answers[currentQuestionIndex]"
          placeholder="Selecciona una opción"
          :options="options[currentQuestionIndex]"
          optionLabel="label"
        />
        <div class="botones">
          <Button @click="prevQuestion" :disabled="currentQuestionIndex === 0">
            Anterior
          </Button>
          <Button
            @click="nextQuestion"
            :disabled="currentQuestionIndex === questions.length - 1"
          >
            Siguiente
          </Button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        { text: "¿Qué plataforma te gustaría probar?" },
        { text: "¿Qué género te gustaría?" },
        { text: "¿Qué estilo de diseño te gustaría?" },
        { text: "¿Qué motor de videojuegos?" },
      ],
      options: [
        [
          { value: "desktop", label: "desktop" },
          { value: "mobile", label: "mobile" },
        ],
        [
          { value: "rpg", label: "rpg" },
          { value: "fps", label: "fps" },
        ],
        [
          { value: "2D", label: "2d" },
          { value: "3D", label: "3d" },
        ],
        [
          { value: "unity", label: "Unity" },
          { value: "unreal", label: "Unreal engine" },
        ],
      ],
      answers: [],
      currentQuestionIndex: 0,
    };
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.formulario {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 100px;
  text-align: center;
  height: 100vh;
}

.botones {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
