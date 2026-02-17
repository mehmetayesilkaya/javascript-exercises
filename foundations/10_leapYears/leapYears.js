const leapYears = (year) =>
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985)); // is not a leap year: returns false
console.log(leapYears(2100));
// Do not edit below this line
module.exports = leapYears;
