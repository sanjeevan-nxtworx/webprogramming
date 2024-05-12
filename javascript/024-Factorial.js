// 5 = 5 X !4 => (4 x !3)  X 3 X 2 X 1
// 6 = 5! X 5

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) fact *= i;

  return fact;
}

function recFactorial(num) {
  return num * recFactorial(num - 1);
}

console.log(recFactorial(6));
