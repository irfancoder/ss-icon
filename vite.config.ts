/** @format */

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: ["./src/outline.ts", "./src/bold.ts"],
      name: "ss-icon",
      fileName: (format) => `ss-icon.${format}.js`,
      formats: ["es", "cjs"],
    },
    outDir: "dist",
    rollupOptions: {
      treeshake: true,
      output: {
        format: "esm",
        esModule: true,
        preserveModules: true,
      },
    },
  },
})
