import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

const isProd = import.meta.env.VITE_NODE_ENV
  ? import.meta.env.VITE_NODE_ENV === "production"
  : false;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    minify: isProd,
    manifest: true,
    rollupOptions: {
      input: ["index.html"],
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
