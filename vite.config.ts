import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// eslint-disable-next-line import/default, import/namespace
import macrosPlugin from "vite-plugin-babel-macros";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), macrosPlugin()],
});
