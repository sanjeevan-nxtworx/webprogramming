// WAP that intializes 3 numbers, call a function that calculates
// the sum of the 3 numbers

const sumof = function (val1, val2, val3) {
  // local function context
  let sum = val1 + val2 + val3;
  return sum;
};

// Higher order function
const callFunction = (val1, val2, val3, fn) => fn(val1, val2, val3);

// Global Context
let num1 = 10,
  num2 = 20,
  num3 = 30;
let sum = callFunction(
  num1,
  num2,
  num3,
  (val1, val2, val3) => val1 - val2 - val3
);
console.log("Result is ", num1, num2, num3, "is", sum);
console.log("** END **");
