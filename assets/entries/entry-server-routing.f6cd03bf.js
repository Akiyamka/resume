import{_ as t,s as p,g,a as c,o as a,b as u,c as _,l as f,d as h,e as v,f as y,h as x,i as E}from"../chunks/chunk-15e979f9.js";const o={},C={},F={},m={},P=[],d={},L=!0,R=[],b={onBeforeRoute:null,onPrerenderStart:null},w=Object.assign({"/renderer/_error.page.jsx":()=>t(()=>import("./renderer_error.page.78b61f44.js"),["assets/entries/renderer_error.page.78b61f44.js","assets/chunks/chunk-89ffcc11.js"]),"/src/pages/index/index.page.tsx":()=>t(()=>import("./src_pages_index_index.page.3c1fa698.js"),["assets/entries/src_pages_index_index.page.3c1fa698.js","assets/chunks/chunk-89ffcc11.js","assets/static/index.page.3cbbd950.css"])}),O={...w};o[".page"]=O;const S=Object.assign({"/renderer/_default.page.client.tsx":()=>t(()=>import("./renderer_default.page.client.a593ca2d.js"),["assets/entries/renderer_default.page.client.a593ca2d.js","assets/chunks/chunk-89ffcc11.js","assets/entries/renderer_default.page.server.extractAssets.2a749dc2.js","assets/static/default.page.server.e6220b49.css"])}),A={...S};o[".page.client"]=A;const I=Object.assign({"/renderer/_default.page.server.tsx":()=>t(()=>import("./renderer_default.page.server.extractAssets.2a749dc2.js"),["assets/entries/renderer_default.page.server.extractAssets.2a749dc2.js","assets/static/default.page.server.e6220b49.css"]),"/src/pages/index/index.page.server.ts":()=>t(()=>import("./src_pages_index_index.page.server.extractAssets.4ed993c7.js"),[])}),z={...I};d[".page.server"]=z;const H=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:L,neverLoaded:d,pageConfigGlobal:b,pageConfigs:R,pageFilesEager:C,pageFilesExportNamesEager:m,pageFilesExportNamesLazy:F,pageFilesLazy:o,pageFilesList:P},Symbol.toStringTag,{value:"Module"}));p(H);const l=g({withoutHash:!0});async function j(){const e=c();return a(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromClient:!1}),a(e,await B(e._pageId)),T(),e}function T(){const e=g({withoutHash:!0});u(l===e,`The URL was manipulated before the hydration finished ('${l}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function B(e){const s={},{pageFilesAll:n,pageConfigs:i}=await _(!0);return a(s,{_pageFilesAll:n,_pageConfigs:i}),a(s,await f(n,i,e)),n.filter(r=>r.fileType!==".page.server").forEach(r=>{h(!r.fileExports?.onBeforeRender,`export { onBeforeRender } of ${r.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),s}v();const k=!0;y(k);D();async function D(){const e=await j();await x(e,!1),E(e,"onHydrationEnd"),await e.exports.onHydrationEnd?.(e)}