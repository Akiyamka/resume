import cl from 'clsx';
import type { Contact } from '../../../types';
import type { GridClassList } from '../types';
import s from './style.module.css';

const LinkWithLabel = ({ label, link, text }: { label: string; link: string; text: string }) => (
  <div>
    <span>
      {label}
      {': '}
    </span>
    <a href={link} target="_blank">
      {text}
    </a>
  </div>
);

export function Contacts(props: { contacts: Contact[]; contentClass?: string; classes: GridClassList }) {
  if (props.contacts.length === 0) return null;

  return (
    <address class={cl(props.classes.container, props.classes.content, props.classes.header, s.address)}>
      <div class={s.contactsList}>
        {props.contacts.map((c) =>
          c.link ? (
            <LinkWithLabel label={c.label} link={c.link} text={c.value} />
          ) : (
            <span>
              {c.label}: {c.label}
            </span>
          )
        )}
      </div>
    </address>
  );
}
