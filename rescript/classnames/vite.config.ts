/// <reference types='vitest' />
import { defineConfig } from "vite"

import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin"

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/rescript/classnames",

  plugins: [nxViteTsPaths()],

  test: {
    passWithNoTests: true,
    globals: true,
    environment: "node",
    include: ["__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      reportsDirectory: "../../coverage/rescript/classnames",
      provider: "v8",
    },
  },
})
