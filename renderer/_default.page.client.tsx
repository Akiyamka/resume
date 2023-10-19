import { hydrate, render as render_ } from 'preact'
import { PageLayout } from '../src/layouts/PageLayout';
import type {
  PageContextBuiltInClientWithClientRouting as
  PageContextBuiltInClient
} from 'vike/types'
import type { PageContext } from '~types';

/**
 * https://github.com/vikejs/vike/blob/main/examples/preact-client-routing/renderer/_default.page.client.jsx
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
