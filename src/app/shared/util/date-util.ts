import * as moment from 'moment';

export function dateToString(date: Date, pattern: string = 'YYYY-MM-DD'): string {
  return moment(date).format(pattern);
}

export function stringToDate(dateStr: string, pattern: string = 'YYYY-MM-DD'): Date {
  if (dateStr) {
    return moment(dateStr, pattern).toDate();
  }
  return null;
}

/**
 * get number of year from past date to today
 * @param date example
 * @param pattern example
 * @return example
 */
export function getYearFromToday(date: Date, pattern: string = 'YYYY-MM-DD') {
  return moment().diff(dateToString(date, pattern), 'years');
}

export function getDateAfterAddingYear(numberOfYear: number): Date {
  return moment().subtract(numberOfYear, 'years').toDate();
}
