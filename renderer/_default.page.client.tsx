import { hydrate, render as render_ } from 'preact'
import { PageLayout } from '../src/layouts/PageLayout';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';
import type { PageContext } from '~types';

/**
 * https://github.com/brillout/vite-plugin-ssr/blob/main/examples/preact-client-routing/renderer/_default.page.client.jsx
 */

function render(pageContext: PageContextBuiltInClient & PageContext) {
  const container = document.getElementById('page-view');
  if (pageContext.isHydration) {
    hydrate(<PageLayout route={pageContext} />, container!)
  } else {
    render_(<PageLayout route={pageContext} />, container!)
  }
}

export const clientRouting = true;
export { render };
