import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(() => {
  const basePath = process.env.BASE_PATH ?? "/";

  return {
    base: basePath,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    server: {
      fs: {
        allow: [path.resolve(__dirname, "../..")]
      }
    }
  };
});
