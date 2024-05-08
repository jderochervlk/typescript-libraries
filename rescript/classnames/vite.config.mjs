import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/rescript/classnames',

  plugins: [],

  test: {
    globals: true,
    cache: { dir: '../../node_modules/.vitest' },
    environment: 'node',
    include: ['__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/rescript/classnames',
      provider: 'v8',
    },
  },
});
