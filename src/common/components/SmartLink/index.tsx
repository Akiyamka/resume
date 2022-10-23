import cl from 'clsx';
import s from './style.module.css';
import type { JSX } from 'solid-js/jsx-runtime';

export function SmartLink({ href, children, target }: { href?: string; target?: string; children: JSX.Element }) {
  if (!href) return children;
  const isExternalLink = href.startsWith('http') && new URL(href).host !== globalThis.location?.host;
  return (
    <a href={href} target={target} class={cl({ [s.external]: isExternalLink })} title={href}>
      {children}
    </a>
  );
}
