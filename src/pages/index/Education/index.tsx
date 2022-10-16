import cl from 'clsx';
import s from './style.module.css';
import t from './strings.json';
import type { Education as EducationType } from '~types';
import type { GridClassList } from '../types';


export function Education(props: { education: EducationType; classes: GridClassList }) {
  return (
    <div class={cl(props.classes.container, s.education)}>
      <h3 class={props.classes.header}>{t.category_name_education}</h3>
      <div class={cl(s.scrollable, props.classes.content)}>
        
      </div>
    </div>
  );
}
