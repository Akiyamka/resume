import cl from 'clsx';
import type { Contact } from '../../../types';
import type { GridClassList } from '../types';
import s from './style.module.css';

export function Contacts(props: { contacts: Contact[]; contentClass?: string, classes: GridClassList }) {
  if (props.contacts.length === 0) return null;

  return (
    <address class={cl(props.classes.container, props.classes.content, props.classes.header, s.address)}>
      <div class={s.contactsList}>
        {props.contacts.map((c) =>
          c.link ? (
            <a href={c.label} target="_blank">
              {c.label}
            </a>
          ) : (
            <span>{c.label}</span>
          )
        )}
      </div>
    </address>
  );
}
