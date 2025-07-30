
export {}

declare global {
  interface Window {
    __RUNTIME_ENV__: {
      API_BASE_URL?: string;
    }
  }
}