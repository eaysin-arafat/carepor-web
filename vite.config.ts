import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ["js-cookie"], // Check if 'js-cookie' is listed here
  //   },
  // },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".ts": "tsx",
      },
    },
  },
});
