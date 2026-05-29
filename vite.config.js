import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at https://bionorth.us (Cloudflare Pages + custom domain).
// For GitHub project-page fallback only, set base to "/BioNorth-Main/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
