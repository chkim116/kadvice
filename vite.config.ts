/// <reference types="vitest" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
  plugins: [
    tsconfigPaths(),
    dts({
      exclude: ['scripts/fixtures/*', 'scripts/utils/*', 'scripts/tests/*'],
    }),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'scripts/index.ts',
      name: 'kadvice',
      fileName: 'index',
    },
  },
  test: {
    exclude: ['node_modules', 'website/**'],
    environment: 'jsdom',
    globals: true,
  },
}));
