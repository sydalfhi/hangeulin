import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    // host: "192.168.70.86",
  },
  plugins: [react()],
});
