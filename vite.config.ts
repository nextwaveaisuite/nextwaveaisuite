import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // Your entry HTML is /client/index.html, so make that the Vite root
  root: "client",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Use the repo-level /public folder (since you already have it)
  // If you prefer /client/public then remove this line.
  publicDir: path.resolve(__dirname, "public"),

  build: {
    // Output dist at repo root so Vercel can serve it cleanly
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
