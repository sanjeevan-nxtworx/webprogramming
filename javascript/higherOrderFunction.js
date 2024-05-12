function isPrime(num) {
  let div = 2;
  while (div < num) {
    if (num % div === 0) return false;
    div++;
  }
  console.log("In PRIME");
  return true;
}

const factorial = function (num) {
  console.log("In Factorial");
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const addNums = (num1, num2, num3 = 0) => {
  console.log("In Add");
  return num1 + num2 + num3;
};

const performOperation = function (fn, num1 = 0, num2 = 0, num3 = 0) {
  return fn(num1, num2, num3);
};

console.log(performOperation(addNums, 10, 15, 20));
console.log(performOperation(factorial, 10));
console.log(performOperation(isPrime, 11));
