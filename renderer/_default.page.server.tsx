import { generateHydrationScript, renderToStream } from 'solid-js/web';
import { PageLayout } from '../src/layouts/PageLayout';
import { escapeInject, dangerouslySkipEscape, stampPipe } from 'vite-plugin-ssr';
import { PageContext } from '~types';

export { render };
export { passToClient };

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'documentProps'];

const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600&display=swap" rel="stylesheet"> 
`;

function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;

  const { pipe } = renderToStream(() => <PageLayout route={() => ({ Page, pageProps })} />);
  stampPipe(pipe, 'node-stream');

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const description = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr';

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(fonts)}
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${pipe}</div>
      </body>
    </html>`;
}
