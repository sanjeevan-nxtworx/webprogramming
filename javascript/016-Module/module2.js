const sumVal = function (num1Val, num2Val) {
  printVal(num1Val);
  return num1Val + num2Val;
};

const diffVal = function (num1Val, num2Val) {
  return num2Val - num1Val;
};

const printVal = function (numVal) {
  console.log(numVal);
};

module.exports = { sumVal, diffVal };
