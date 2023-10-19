import { defineConfig } from 'vite';
import ssr from 'vike/plugin';
import preact from '@preact/preset-vite';
import { validateJson } from './scripts/validation.mjs';
import postcssConfig from './postcss.config';

export default (() => {
  validateJson('src/data/resume.json', 'src/types/index.ts', 'Resume');
  return defineConfig(({ mode }) => ({
    plugins: [preact(), ssr({ prerender: true })],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      polyfillDynamicImport: false,
    },
    // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vike's CI
    optimizeDeps: {
      include: [
        'preact',
        'preact/devtools',
        'preact/debug',
        'preact/jsx-dev-runtime',
        'preact/hooks',
      ],
    },
    css: {
      postcss: postcssConfig,
    },
    resolve: {
      alias: {
        '~common': `${__dirname}/src/common`,
        '~config': `${__dirname}/config.ts`,
        '~data': `${__dirname}/src/data`
      },
    },
  }));
})();