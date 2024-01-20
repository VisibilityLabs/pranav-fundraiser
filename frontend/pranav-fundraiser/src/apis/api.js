import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const GET = (url) => api.get(url);
export const POST = (url, data) => api.post(url, data);
export const PUT = (url, data) => api.put(url, data);
export const DELETE = (url) => api.delete(url);
export const PATCH = (url, data) => api.patch(url, data);