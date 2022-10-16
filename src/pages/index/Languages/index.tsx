import cl from 'clsx';
import s from './style.module.css';
import t from './strings.json';
import type { Language } from '~types';
import type { GridClassList } from '../types';

export function Languages(props: { languages: Language[]; classes: GridClassList  }) {
  return (
    <div class={cl(props.classes.container, s.languages)}>
      <h3 class={props.classes.header}>{t.category_name_languages}</h3>
      <table class={props.classes.content}>
        <tbody>
          {props.languages.map((lang) => (
            <tr>
              <td>{lang.title}<sup></sup></td>
              <td class={s.level}>{t.languages_levels[lang.level]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
