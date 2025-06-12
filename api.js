import axios from "axios";

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// ✅ Request interceptor: Attach token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor: Refresh token on 401
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh_token")
    ) {
      originalRequest._retry = true;
      try {
        const res = await axios.post("http://localhost:8000/api/token/refresh/", {
          refresh: localStorage.getItem("refresh_token"),
        });
        localStorage.setItem("access_token", res.data.access);
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return API(originalRequest); // 🔁 Retry original request
      } catch (err) {
        console.error("Token refresh failed ❌");
      }
    }
    return Promise.reject(error);
  }
);

export default API;
