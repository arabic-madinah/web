import axios from "axios";
import { env } from "../utils/env/env.ts";

export const http = axios.create({
  baseURL: env.API_BASE_URL || "http://localhost:5192",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
http.interceptors.request.use(function (config) {
  config.headers["X-API-KEY"] = localStorage.getItem("passcode");
  return config;
});
