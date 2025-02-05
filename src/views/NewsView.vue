<template>
  <div class="card p-8">
    <h2 class="m-0 m-4 text-6xl">Noticias</h2>
    <DataView :value="news">
      <template #list="slotProps">
        <div class="flex flex-column gap-4">
          <div
            class="flex flex-column m-4"
            v-for="(item, index) in slotProps.items"
            :key="index"
          >
            <div class="flex justify-content-between">
              <h3 class="my-3 text-6xl">{{ item.title }}</h3>
              <small class="align-self-end">{{ item.type }}</small>
            </div>
            <div
              class="flex gap-4"
              :class="{
                'border-bottom-2 border-primary-500': index !== news.length - 1,
              }"
            >
              <p class="my-0 py-8">
                {{ item.description }}
              </p>
              <img :src="item.url" />
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import GoogleSheetsService from "@/services/GoogleSheetsService";

export default {
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async getNews() {
      let response = await GoogleSheetsService.getWeeklyHighlights();
      this.news = response.data;
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
