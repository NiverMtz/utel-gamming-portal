<template>
  <div class="flex flex-column gap-4 my-4 mx-4 lg:mx-8">
    <h1>Noticias</h1>
    <DataView :value="news">
      <template #list="slotProps">
        <div class="flex flex-column gap-4">
          <div
            class="flex flex-column p-4"
            v-for="(item, index) in slotProps.items"
            :key="index"
          >
            <div
              class="grid"
              :class="{
                'border-bottom-2 border-primary-500': index !== news.length - 1,
              }"
            >
              <div class="col-12">
                <div class="flex justify-content-between">
                  <h3 class="my-3 lg:text-6xl">{{ item.title }}</h3>
                  <small class="align-self-end mb-4" style="color: grey">{{
                    item.type
                  }}</small>
                </div>
              </div>
              <div class="col-12 md:col-4">
                <Image :src="item.url" alt="Image" width="100%" preview />
              </div>
              <div class="col-12 md:col-8">
                <div class="flex flex-wrap justify-content-between">
                  {{ item.description }}
                </div>
              </div>
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
