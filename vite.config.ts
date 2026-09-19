import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";

if (process.cwd() !== fs.realpathSync(process.cwd())) {
  process.chdir(fs.realpathSync(process.cwd()));
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

