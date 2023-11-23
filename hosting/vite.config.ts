import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  envDir: "../",

  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "../dist/hosting",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5001/guildbloom-63c0c/us-central1/api/",
        changeOrigin: true,
      },
      "/bot": {
        target: "http://127.0.0.1:5002/guildbloom-63c0c/us-central1/bot/",
        changeOrigin: true,
      },
    },
  },
});
