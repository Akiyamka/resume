import cl from 'clsx';
import s from './style.module.css';
import t from './strings.json';
import type { Education as EducationType } from '~types';
import type { GridClassList } from '../types';
import { TimeDistanceInWords } from '~common/components/PeriodsTotalTime';
import { SmartLink } from '~common/components/SmartLink';
import { sortByDateDescending } from '~common/utils/sortByDateDescending';

export function Education(props: { education: EducationType; classes: GridClassList }) {
  const sortedByDatePeriods = sortByDateDescending(props.education.periods);

  return (
    <div class={cl(props.classes.container, s.education)}>
      <div class={cl(props.classes.header, s.categoryHeader)}>
        <h3> {t.category_name_education}</h3>
      </div>

      <div class={cl(s.scrollable, props.classes.content)}>
        {sortedByDatePeriods.map((period) => (
          <div class={s.period}>
            <div class={s.header}>
              <div>
                <h4 class={s.name}>
                  <SmartLink href={period.homepage} target={"_blanck"}>{period.educational_facility}</SmartLink>
                </h4>
                <div class={s.specialty}>{period.specialty}</div>
              </div>
              <TimeDistanceInWords utcStart={period.date_start} utcEnd={period.date_end} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
