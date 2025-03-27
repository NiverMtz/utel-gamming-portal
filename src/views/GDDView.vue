<template>
  <div class="flex flex-column gap-4 m-4">
    <div class="grid grid-nogutter justify-content-center mt-4">
      <div class="col-12 md:col-10">
        <h2>Generador de GDD</h2>
        <small>{{ subtitle }}</small>
      </div>
    </div>
    <h3 class="m-0 md:text-center lg:my-4">{{ title }}</h3>
    <Form
      v-slot="$form"
      :initialValues="initialValues"
      :resolver="resolver"
      @submit="onFormSubmit"
      class="grid grid-nogutter gap-4 justify-content-center w-full md:w-56"
    >
      <div class="col-12 md:col-5">
        <div class="flex flex-column gap-1">
          <Select
            name="platform"
            :options="platformOptions"
            optionLabel="name"
            placeholder="Selecciona una plataforma"
            fluid
          />
          <Select
            name="gender"
            :options="genderOptions"
            optionLabel="name"
            placeholder="Selecciona un género"
            fluid
          />
          <Select
            name="art"
            :options="artOptions"
            optionLabel="name"
            placeholder="Selecciona el tipo de arte"
            fluid
          />
          <Select
            name="engine"
            :options="engineOptions"
            optionLabel="name"
            placeholder="Selecciona el motor de desarrollo"
            fluid
          />
          <Textarea
            name="description"
            placeholder="Escribe una breve descripción"
            rows="5"
            cols="30"
            style="resize: none"
          />
        </div>
      </div>
      <div class="col-12 md:col-5">
        <div class="flex flex-column gap-4">
          <Panel header="Resumen">
            <div class="grid grid-nogutter">
              <div class="col-6">
                <h5 class="m-0">Plataforma</h5>
                <small class="m-0">
                  {{ $form?.platform?.value?.name }}
                </small>
              </div>
              <div class="col-6">
                <h5 class="m-0">Género</h5>
                <small class="m-0">
                  {{ $form?.gender?.value?.name }}
                </small>
              </div>
              <div class="col-6">
                <h5 class="m-0">Arte</h5>
                <small class="m-0">
                  {{ $form?.art?.value?.name }}
                </small>
              </div>
              <div class="col-6">
                <h5 class="m-0">Engine</h5>
                <small class="m-0">
                  {{ $form?.engine?.value?.name }}
                </small>
              </div>
              <div class="col-12">
                <h5 class="m-0">Descripción</h5>
                <small class="m-0">
                  {{ $form?.description?.value }}
                </small>
              </div>
            </div>
          </Panel>
          <Button
            type="submit"
            severity="primary"
            label="Generar GDD"
            rounded
          />
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import GoogleSheetsService from "@/services/GoogleSheetsService";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
export default {
  data() {
    return {
      title: "¿Cómo quieres que sea tu juego?",
      subtitle:
        "Este generador es una herramienta para construir documentos de diseño de videojuegos (GDD, por sus siglas en inglés). El GDD es una herramienta esencial para el desarrollo de videojuegos, ya que proporciona una guía clara y completa para todo el proceso.",
      initialValues: {
        platform: { name: "", code: "" },
        gender: { name: "", code: "" },
        art: { name: "", code: "" },
        engine: { name: "", code: "" },
      },
      resolver: zodResolver(
        z.object({
          platform: z.union([
            z.object({
              name: z.string().min(1, "Requerido"),
            }),
            z.any().refine((val) => false, { message: "Requerido" }),
          ]),
          gender: z.union([
            z.object({
              name: z.string().min(1, "Requerido"),
            }),
            z.any().refine((val) => false, { message: "Requerido" }),
          ]),
          art: z.union([
            z.object({
              name: z.string().min(1, "Requerido"),
            }),
            z.any().refine((val) => false, { message: "Requerido" }),
          ]),
          engine: z.union([
            z.object({
              name: z.string().min(1, "Requerido"),
            }),
            z.any().refine((val) => false, { message: "Requerido" }),
          ]),
          description: z.union([z.any()]),
        })
      ),
      platformOptions: [
        { name: "Desktop", code: "pc" },
        { name: "Mobile", code: "mob" },
        { name: "Consolas", code: "con" },
      ],
      genderOptions: [
        { name: "FPS", code: "fps" },
        { name: "Estrategia", code: "str" },
        { name: "Survival", code: "sur" },
        { name: "Simulación", code: "sim" },
        { name: "Música y ritmo", code: "myr" },
      ],
      artOptions: [
        { name: "2D", code: "2d" },
        { name: "3D", code: "3d" },
        { name: "Pixel art", code: "pxa" },
      ],
      engineOptions: [
        { name: "Unity", code: "uni" },
        { name: "Godot", code: "god" },
        { name: "Unreal Engine", code: "une" },
      ],
    };
  },
  methods: {
    async onFormSubmit({ valid, values }) {
      const { art, description, engine, gender, platform } = values;
      const payload = {
        art: art.name,
        description: description,
        engine: engine.name,
        gender: gender.name,
        platform: platform.name,
      };
      if (valid) {
        let response = await GoogleSheetsService.generateGDD(payload);
        this.descargarPDF(response.data.pdfBase64);
      }
    },
    descargarPDF(base64String) {
      const binaryString = atob(base64String);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const arrayBuffer = bytes.buffer;
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "tu-archivo.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    },
  },
};
</script>

<style></style>
