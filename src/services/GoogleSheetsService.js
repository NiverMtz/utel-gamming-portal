import apiClient from "./apiClient";

export default {
  getWeeklyHighlights() {
    return apiClient.get("/api/data");
  },
};
