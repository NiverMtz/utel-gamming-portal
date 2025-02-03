import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

export default apiClient;
