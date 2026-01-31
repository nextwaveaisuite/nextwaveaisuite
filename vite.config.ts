import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // Your entry HTML is /client/index.html
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Use /public at repo root (you already have it)
  publicDir: path.resolve(__dirname, "public"),

  build: {
    // Output at repo root so Vercel can serve it
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
