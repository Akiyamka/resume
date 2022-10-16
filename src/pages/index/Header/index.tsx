import cl from 'clsx';
import s from './style.module.css';
import type { GridClassList } from '../types';

export function Header(props: { heading: string; subheading: string; classes: GridClassList }) {
  return (
    <header class={cl(props.classes.container, props.classes.header, s.header)}>
      <h2>
        <div class={s.heading}>{props.heading}</div>
        <div class={s.subheading}>{props.subheading}</div>
      </h2>
    </header>
  );
}
