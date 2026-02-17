const sumAll = function (min, max) {
  const invalid = (n) => typeof n !== 'number' || !Number.isInteger(n) || n < 0;

  if (invalid(min) || invalid(max)) return 'ERROR';

  const firstValue = Math.min(min, max);
  const lastValue = Math.max(min, max);
  let sum = 0;

  for (let i = firstValue; i <= lastValue; i++) sum += i;

  return sum;
};

console.log(sumAll(2, 7));

// Do not edit below this line
module.exports = sumAll;
