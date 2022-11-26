import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://127.0.0.1:4173",
  },
});
