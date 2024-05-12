let num1 = 0;
let num2 = 10;

let bVal = checkValWithZero(num1) | checkValWithTen(num2);

function checkValWithZero(num) {
  console.log("In Zero");
  if (num === 0) return true;
  return false;
}

function checkValWithTen(num) {
  console.log("In Ten");
  if (num === 10) return true;
  return false;
}
