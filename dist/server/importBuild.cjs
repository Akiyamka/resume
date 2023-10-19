// File generated by https://github.com/brillout/vite-plugin-import-build
(async () => {
  const { setImportBuildGetters } = await import('../../node_modules/.pnpm/vike@0.4.143_vite@4.5.0/node_modules/vike/dist/esm/node/runtime/globalContext/loadImportBuild.js');
  setImportBuildGetters({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../assets.json'),
    pluginManifest: () => require('../client/vike.json'),
  });
})()