export const sortByDateDescending = <T extends { date_start: string }>(periods: T[]): T[] =>
  [...periods].sort((p1, p2) => Date.parse(p2.date_start) - Date.parse(p1.date_start));
