import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_MICROSERVICE_GOOGLE_SHEETS,
});

export default apiClient;
