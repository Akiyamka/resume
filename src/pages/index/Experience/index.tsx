import cl from 'clsx';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import s from './style.module.css';
import t from './strings.json';
import type { JSX } from 'solid-js/jsx-runtime';
import type { Experience as ExperienceType, WorkPeriod } from '~types';
import type { GridClassList } from '../types';

const nowInUTC = () => new Date(Date.now()).toUTCString();
const getDiff = (utcStart: string, utcEnd: string) => formatDistanceStrict(new Date(utcStart), new Date(utcEnd));
const LinkIfPossible = ({ href, children, target }: { href?: string; target?: string; children: JSX.Element }) => {
  return href ? (
    <a href={href} target={target}>
      {children}
    </a>
  ) : (
    children
  );
};
const sortByDateDescending = (periods: WorkPeriod[]): WorkPeriod[] =>
  [...periods].sort((p1, p2) => Date.parse(p2.date_start) - Date.parse(p1.date_start));
const getTotalExp = (sortedPeriods: WorkPeriod[]): string | null => {
  const firstExp = sortedPeriods.at(-1)?.date_start
  if (firstExp) {
    return getDiff(firstExp, nowInUTC())
  }
  return null;
}

export function Experience(props: { experience: ExperienceType; classes: GridClassList }) {
  const sortedByDatePeriods = sortByDateDescending(props.experience.periods);
  const totalExp = getTotalExp(sortedByDatePeriods);
  return (
    <div class={cl(props.classes.container, s.experience)}>
      <div class={cl(props.classes.header, s.categoryHeader)}>
        <h3> {t.category_name_experience}</h3>
        { totalExp ? <div>{getTotalExp(sortedByDatePeriods)}</div> : null }
      </div>
      <div class={cl(s.scrollable, props.classes.content)}>
        {sortedByDatePeriods.map((period) => (
          <div class={s.period}>
            <div class={s.header}>
              <div>
                <h4 class={s.name}>
                  <LinkIfPossible href={period.homepage} target="_blank">
                    {period.company_name}
                  </LinkIfPossible>
                </h4>
                <div class={s.domain}>{period.domain}</div>
              </div>
              <div>{getDiff(period.date_start, period.date_end ?? nowInUTC())}</div>
            </div>
            <div class={s.responsibilities}>
              <div>{t.experience_responsibilities}:</div>
              <ul>
                {period.responsibilities.map((resp) => (
                  <li>{resp}</li>
                ))}
              </ul>
            </div>
            <div class={s.techStack}>
              <div>{t.experience_tech_stack}:</div>
              <div class={s.techContainer}>
                {period.tech_stack.map((resp) => (
                  <span class={s.techChips}>{resp}</span>
                ))}
              </div>
            </div>
            <div class={s.timeMarker}>
              <div class={s.dateContainer}>{new Date(period.date_start).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
