/// <reference types="./env.d.ts" />

const renv = window.__RUNTIME_ENV__;

export const env = {
  API_BASE_URL: renv?.API_BASE_URL || import.meta.env.VITE_API_BASE_URL,
};
