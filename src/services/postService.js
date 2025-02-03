import apiClient from "./apiClient";

export default {
  getPosts() {
    return apiClient.get("/posts");
  },
};
