import { JSX as PreactJSX } from 'preact';

declare global {
    namespace JSX {
      interface Element extends PreactJSX.Element {}
    }
}
