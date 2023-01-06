import type { JSX } from 'preact/jsx-runtime';
import './PageLayout.css';
import './variables.css';

export { PageLayout };

export interface Route {
  Page: (props: Record<string, unknown>) => JSX.Element;
  pageProps: Record<string, unknown>;
}

interface Props {
  route: Route;
}
interface Children {
  children: JSX.Element;
}

function PageLayout(props: Props) {
  const renderedRoute = () => {
    const { Page, pageProps } = props.route ?? {};
    return Page && <Page {...pageProps} />;
  };

  return (
    <Layout>
      <Content>{renderedRoute()}</Content>
    </Layout>
  );
};

function Layout(props: Children) {
  return <div class="default-layout">{props.children}</div>;
};

function Content(props: Children) {
  return <div class="default-layout__content">{props.children}</div>;
};
