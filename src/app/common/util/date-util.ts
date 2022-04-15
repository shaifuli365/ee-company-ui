import * as moment from 'moment';


export function dateToString(date: Date, pattern: string = 'YYYY-MM-DD'): string {
  if (moment(date).format(pattern) === 'Invalid date') {
    return '';
  }
  return moment(date).format(pattern);
}

export function stringToDate(dateStr: string, pattern: string = 'YYYY-MM-DD'): Date {
  if (dateStr) {
    return moment(dateStr.substring(0, 10), pattern).toDate();
  }
  return new Date();
}

export function formatDateString(dateStr: string, pattern: string = 'YYYY-MM-DD'): string {
  if (dateStr) {
    return '';
  }
  return moment(dateStr).format(pattern);
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


export function dateToYearMonthDayConversion(dob) {
  let dobMoment, newDateMoment, year, month, day;
  dobMoment = moment(dob);
  newDateMoment = moment();

  year = newDateMoment.diff(dobMoment, 'year');
  dobMoment = dobMoment.add(year, 'year');
  month = newDateMoment.diff(dobMoment, 'month');
  dobMoment = dobMoment.add(month, 'month');
  day = newDateMoment.diff(dobMoment, 'day');

  year = year != 0 ? year + 'Y ' : '';
  month = month != 0 ? month + "M " : '';
  day = day != 0 ? day + "D" : '';

  return year + month + day;
}
