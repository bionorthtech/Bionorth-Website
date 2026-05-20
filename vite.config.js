import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project is served from a GitHub Pages project path:
//   https://bionorthtech.github.io/BioNorth-Main/
// This MUST match the repository name. If you rename the repo, update this.
// If you move to the custom domain bionorth.us, set base to "/" and add
// public/CNAME containing "bionorth.us".
export default defineConfig({
  plugins: [react()],
  base: "/BioNorth-Main/",
});
