import cl from 'clsx';
import type { Skill } from '~types';
import s from './style.module.css';
import t from './strings.json';
import type { GridClassList } from '../types';

export function Skills(props: { skills: Skill[]; classes: GridClassList; }) {
  return (
    <div class={cl(props.classes.container, s.skills)}>
      <h3 class={props.classes.header}>{t.category_name_skills}</h3>
      <table class={props.classes.content}>
        <tbody>
          {props.skills.map((skill) => (
            <tr title={skill.tip}>
              <td>{skill.title}<sup>{skill.tip ? '?' : ''}</sup></td>
              <td class={s.level}>{t.skills_levels[skill.level]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
