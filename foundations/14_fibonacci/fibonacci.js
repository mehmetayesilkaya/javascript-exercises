const fibonacci = function (nthFib) {
  if (Number(nthFib) === 1 || Number(nthFib) == 2) return 1;
  if (Number(nthFib) < 0) return "OOPS";
  if (Number(nthFib) == 0) return 0;
  let prev2 = 1;
  let prev1 = 1;
  let result = 1;
  for (let n = 3; n <= nthFib; n++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }
  return result;
};
console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
