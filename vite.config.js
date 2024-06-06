import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-414/",
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 5173,
  },
});
