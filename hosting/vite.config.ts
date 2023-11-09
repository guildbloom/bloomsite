import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "../",
  build: {
    outDir: "../dist/hosting",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      "/login": {
        target: "http://127.0.0.1:5001/guildbloom-63c0c/us-central1/login/",
        changeOrigin: true,
      },
    },
  },
});
