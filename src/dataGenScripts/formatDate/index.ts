export const formatDate = (day : number, month : number, year : number) : string => {
  if (day > 0 && day < 32 && month < 13 && month > 0 && year < 2021 && year > 2000){
    const dayToString = day.toString();
    const addZeroToDayIfNeeded = day < 10 ? '0' + dayToString : dayToString
    const monthToString = month.toString();
    const addZeroToMonthIfNeeded = month < 10 ? '0' + monthToString : monthToString
    const yearToString = year.toString();

    return  yearToString + '-' + addZeroToMonthIfNeeded + '-' + addZeroToDayIfNeeded;
  }
  return '0000-00-00';
}
