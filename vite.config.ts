import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import ssr from 'vite-plugin-ssr/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { validateJson } from './scripts/validation.mjs';

export default () => {
  validateJson('src/data/resume.json', 'src/types/index.ts', 'Resume');
  return defineConfig({
    plugins: [tsconfigPaths(), solidPlugin({ ssr: true }), ssr({ prerender: true })],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      // https://github.com/brillout/vite-plugin-ssr/blob/main/examples/solid-ssr/vite.config.ts
      // @ts-ignore
      polyfillDynamicImport: false,
    },
  });
};
