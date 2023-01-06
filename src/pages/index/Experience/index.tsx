import cl from 'clsx';
import s from './style.module.css';
import t from './strings.json';
import { TimeDistanceInWords } from '~common/components/PeriodsTotalTime';
import { SmartLink } from '~common/components/SmartLink';
import { sortByDateDescending } from '~common/utils/sortByDateDescending';
import type { Experience as ExperienceType } from '~types';
import type { GridClassList } from '../types';

export function Experience(props: { experience: ExperienceType; classes: GridClassList }) {
  const sortedByDatePeriods = sortByDateDescending(props.experience.periods);
  const startEmployment = sortedByDatePeriods.at(-1)?.date_start;
  return (
    <div class={cl(props.classes.container, s.experience)}>
      <div class={cl(props.classes.header, s.categoryHeader)}>
        <h3> {t.category_name_experience}</h3>
        {startEmployment && <TimeDistanceInWords utcStart={startEmployment} />}
      </div>
      <div class={s.availableSpace}>
        <div class={cl(s.scrollable, props.classes.content)}>
          {sortedByDatePeriods.map((period, i, arr) => (
            <div class={s.period}>
              <div class={s.header}>
                <div>
                  <h4 class={s.name}>
                    <SmartLink href={period.homepage}>{period.company_name}</SmartLink>
                  </h4>
                  <div class={s.domain}>{period.domain.join(', ')}</div>
                </div>
                <TimeDistanceInWords utcStart={period.date_start} utcEnd={period.date_end} />
              </div>
              <div class={s.position}>
                <div>{t.experience_position}:</div>
                <div>{period.position}</div>
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
              <div class={cl(s.timeMarker, { [s.opaque]: i === arr.length - 1 })}>
                <div class={s.dateContainer}>{new Date(period.date_start).toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
