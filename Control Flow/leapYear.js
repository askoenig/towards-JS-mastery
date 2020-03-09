// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
//   unless the year is also evenly divisible by 400

const isLeap = year => {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

//refactor attempt:

const isLeap = () => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};
