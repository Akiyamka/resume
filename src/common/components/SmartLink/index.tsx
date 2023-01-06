import cl from 'clsx';
import { ComponentChildren } from 'preact';
import s from './style.module.css';

export function SmartLink({ href, children }: { href?: string; children: ComponentChildren }) {
  if (!href) return <>{children}</>;
  const isExternalLink = href.startsWith('http') && new URL(href).host !== globalThis.location?.host;
  return (
    <a href={href} target={isExternalLink ? '_blank' : undefined} class={cl({ [s.external]: isExternalLink })} title={href}>
      {children}
    </a>
  );
}
