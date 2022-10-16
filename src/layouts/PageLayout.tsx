import type { Accessor, JSX, Component } from 'solid-js';
import './PageLayout.css';
import './variables.css';

export { PageLayout };

export interface Route {
  Page: Component;
  pageProps: Record<string, unknown>;
}

interface Props {
  route: Accessor<Route | null>;
}
interface Children {
  children: JSX.Element;
}

const PageLayout: Component<Props> = (props) => {
  const renderedRoute = () => {
    const { Page, pageProps } = props.route() ?? {};
    return Page && <Page {...pageProps} />;
  };

  return (
    <Layout>
      <Content>{renderedRoute()}</Content>
    </Layout>
  );
};

const Layout: Component<Children> = (props) => {
  return <div class="default-layout">{props.children}</div>;
};

const Content: Component<Children> = (props) => {
  return <div class="default-layout__content">{props.children}</div>;
};
