import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import { validateJson } from './scripts/validation.mjs';
import postcssConfig from './postcss.config';

export default (() => {
  validateJson('src/data/resume.json', 'src/types/index.ts', 'Resume');
  return defineConfig(({ mode }) => ({
    plugins: [tsconfigPaths(), preact(), ssr({ prerender: true })],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      polyfillDynamicImport: false,
    },
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
    optimizeDeps: {
      include: ['preact', 'preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact/hooks'],
    },
    css: {
      postcss: postcssConfig,
    },
  }));
})();
