import renderToString from 'preact-render-to-string'

import { PageLayout } from '../src/layouts/PageLayout';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { PageContext } from '~types';

// See https://vike.dev/data-fetching
const passToClient = ['pageProps', 'documentProps'];

const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600&display=swap" rel="stylesheet"> 
`;


function render(pageContext: PageContext) {
  const renderedString = renderToString(<PageLayout route={pageContext} />);

  // See https://vike.dev/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const description = (documentProps && documentProps.description) || 'App using Vite + vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(fonts)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(renderedString)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  }
}

export { render };
export { passToClient };
