import axios from "axios";
import { auth } from "../auth/firebase";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL });

api.interceptors.request.use(
  async (config) => {
    const token = await auth.currentUser.getIdToken();
    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
