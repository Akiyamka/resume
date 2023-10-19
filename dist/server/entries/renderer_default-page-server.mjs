import renderToString from 'preact-render-to-string';
import { jsx } from 'preact/jsx-runtime';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

const PageLayout$1 = '';

const variables = '';

function PageLayout(props) {
  const renderedRoute = () => {
    const {
      Page,
      pageProps
    } = props.route ?? {};
    return Page && jsx(Page, {
      ...pageProps
    });
  };
  return jsx(Layout, {
    children: jsx(Content, {
      children: renderedRoute()
    })
  });
}
function Layout(props) {
  return jsx("div", {
    class: "default-layout",
    children: props.children
  });
}
function Content(props) {
  return jsx("div", {
    class: "default-layout__content",
    children: props.children
  });
}

const passToClient = ["pageProps", "documentProps"];
const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600&display=swap" rel="stylesheet"> 
`;
function render(pageContext) {
  const renderedString = renderToString(jsx(PageLayout, {
    route: pageContext
  }));
  const {
    documentProps
  } = pageContext;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const description = documentProps && documentProps.description || "App using Vite + vike";
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
  };
}

export { passToClient, render };
