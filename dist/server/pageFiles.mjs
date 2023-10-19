const exportNames$4 = ["Page"];

const __vite_glob_1_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: 'Module' }));

const exportNames$3 = ["Page"];

const __vite_glob_1_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: 'Module' }));

const exportNames$2 = ["render", "passToClient"];

const __vite_glob_3_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: 'Module' }));

const exportNames$1 = ["onBeforeRender"];

const __vite_glob_3_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: 'Module' }));

const exportNames = ["clientRouting", "render"];

const __vite_glob_5_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: 'Module' }));

const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;

const pageConfigs = [
];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null,
};

const pageFilesLazyIsomorph1 = /* #__PURE__ */ Object.assign({"/renderer/_error.page.jsx": () => import('./entries/renderer_error-page.mjs'),"/src/pages/index/index.page.tsx": () => import('./entries/src_pages_index_index-page.mjs')});
const pageFilesLazyIsomorph = {...pageFilesLazyIsomorph1};
pageFilesLazy['.page'] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* #__PURE__ */ Object.assign({"/renderer/_error.page.jsx": __vite_glob_1_0,"/src/pages/index/index.page.tsx": __vite_glob_1_1});
const pageFilesExportNamesEagerIsomorph = {...pageFilesExportNamesEagerIsomorph1};
pageFilesExportNamesEager['.page'] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* #__PURE__ */ Object.assign({"/renderer/_default.page.server.tsx": () => import('./entries/renderer_default-page-server.mjs'),"/src/pages/index/index.page.server.ts": () => import('./entries/src_pages_index_index-page-server.mjs')});
const pageFilesLazyServer = {...pageFilesLazyServer1};
pageFilesLazy['.page.server'] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* #__PURE__ */ Object.assign({"/renderer/_default.page.server.tsx": __vite_glob_3_0,"/src/pages/index/index.page.server.ts": __vite_glob_3_1});
const pageFilesExportNamesEagerServer = {...pageFilesExportNamesEagerServer1};
pageFilesExportNamesEager['.page.server'] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* #__PURE__ */ Object.assign({});
const pageFilesEagerRoute = {...pageFilesEagerRoute1};
pageFilesEager['.page.route'] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* #__PURE__ */ Object.assign({"/renderer/_default.page.client.tsx": __vite_glob_5_0});
const pageFilesExportNamesEagerClient = {...pageFilesExportNamesEagerClient1};
pageFilesExportNamesEager['.page.client'] = pageFilesExportNamesEagerClient;

export { isGeneratedFile, neverLoaded, pageConfigGlobal, pageConfigs, pageFilesEager, pageFilesExportNamesEager, pageFilesExportNamesLazy, pageFilesLazy, pageFilesList };
