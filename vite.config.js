import laravelVitePlugin from "laravel-vite-plugin";
import { defineConfig } from "vite";
import path from "path"; // Ajoutez cette ligne pour importer le module path

export default defineConfig({
  base: "/floptwich/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
});
