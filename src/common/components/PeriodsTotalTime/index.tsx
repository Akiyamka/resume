import { formatDistanceStrict } from 'date-fns';

type Period = {
  date_start: string;
  date_end?: string;
};

const nowInUTC = () => new Date(Date.now()).toUTCString();

const getDiff = (utcStart: string, utcEnd?: string) =>
  formatDistanceStrict(new Date(utcStart), new Date(utcEnd ?? nowInUTC()));

const getYears = (utcStart: string, utcEnd?: string) => {
  const start = new Date(utcStart).getFullYear();
  const end = new Date(utcEnd ?? nowInUTC()).getFullYear();
  return `${start} - ${end}`;
};

const getTotalExp = (sortedPeriods: Period[]): string | null => {
  const firstExp = sortedPeriods.at(-1)?.date_start;
  if (firstExp) {
    return getDiff(firstExp, nowInUTC());
  }
  return null;
};

export function PeriodsTotalTime({ periods }: { periods: Period[] }) {
  const totalExp = getTotalExp(periods);
  return totalExp ? <div>{totalExp}</div> : null;
}

export function TimeDistanceInWords(props: {
  utcStart: string;
  utcEnd?: string;
  class?: string;
}) {
  const distance = getDiff(props.utcStart, props.utcEnd);
  const distanceYear = getYears(props.utcStart, props.utcEnd);
  return distance ? (
    <div title={distanceYear}>
      {distance}
      <sup>?</sup>
    </div>
  ) : null;
}
