<template>
  <div style="max-width: 50%; margin: 5rem auto">
    <h1 class="m-0">UTEL GDD</h1>
    <p>
      El Generador de Documentos de Diseño (GDD) es una herramienta esencial
      para la preproducción de videojuegos. Permite estructurar y definir todos
      los aspectos clave del juego antes de su desarrollo. El resultado es un
      documento PDF detallado que sirve como guía durante todo el proceso. Para
      generar ideas innovadoras y relevantes, el GDD se apoya en modelos de
      inteligencia artificial entrenados para interpretar y expandir los
      parámetros definidos por el usuario.
    </p>
  </div>
  <div class="formulario">
    <transition name="fade" mode="out-in">
      <div v-if="currentQuestionIndex !== null" key="question">
        <div class="flex flex-column align-items-center gap-6">
          <h2>{{ questions[currentQuestionIndex].text }}</h2>
          <Select
            v-model="answers[currentQuestionIndex]"
            placeholder="Selecciona una opción"
            :options="options[currentQuestionIndex]"
            optionLabel="label"
            class="w-12rem"
          />
          <!-- <div class="botones">
            <Button
              @click="prevQuestion"
              :disabled="currentQuestionIndex === 0"
            >
              Anterior
            </Button>
            <Button
              @click="nextQuestion"
              :disabled="currentQuestionIndex === questions.length - 1"
            >
              Siguiente
            </Button>
          </div> -->
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
  watch: {
    answers(newAnswers, OldAnswers) {
      console.log(newAnswers);
      if (newAnswers[0]) {
        nextQuestion();
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
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  height: 45vh;
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
