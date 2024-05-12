let factorial = function factorial(fn, num) {
  if (num === 1) return 1;
  return num * fn(fn, num - 1);
};

let fact = factorial(factorial, 5);
console.log(fact);
