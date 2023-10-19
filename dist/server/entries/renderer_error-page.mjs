import { jsxs, Fragment, jsx } from 'preact/jsx-runtime';

function Page({
  is404
}) {
  if (is404) {
    return jsxs(Fragment, {
      children: [jsx("h1", {
        children: "404 Page Not Found"
      }), jsx("p", {
        children: "This page could not be found."
      })]
    });
  } else {
    return jsxs(Fragment, {
      children: [jsx("h1", {
        children: "500 Internal Server Error"
      }), jsx("p", {
        children: "Something went wrong."
      })]
    });
  }
}

export { Page };
