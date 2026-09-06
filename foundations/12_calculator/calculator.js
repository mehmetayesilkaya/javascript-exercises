const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc * val;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (value) {
  let result = 1;
  for (let i = 1; i <= value; i++) result = i * result;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
