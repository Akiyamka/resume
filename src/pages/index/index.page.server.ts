
import { PageContext } from '~types'
import resume from '~data/resume.json';

export async function onBeforeRender(pageContext: PageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.

  // We make `resume` available as `pageContext.pageProps.resume`
  const pageProps = { resume }
  return {
    pageContext: {
      pageProps
    }
  }
}

