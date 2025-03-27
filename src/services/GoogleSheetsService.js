import apiClient from "./apiClient";

export default {
  getWeeklyHighlights() {
    return apiClient.get("/api/news");
  },
  getAboutUsTeam() {
    return apiClient.get("/api/about");
  },
  generateGDD(data) {
    return apiClient.post("/api/gdd-generator", data);
  },
};
