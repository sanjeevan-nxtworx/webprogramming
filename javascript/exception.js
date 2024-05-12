let mainFunc = function (num1, num2) {
  let val = submainFunc(num1, num2);
  return val + 5;
};

let submainFunc = function (num1, num2) {
  let xVal = num1 + num2 - 35;
  let val = subsubmainFunc(xVal, num2);
  return val / 2;
};

let subsubmainFunc = function (num1, num2) {
  if (num1 < num2) {
    // error
    throw { desc: "Num1 is Less than Num2", errType: "Parameter Mismatch" };
  }
  return num1 * num2 * 20;
};

try {
  let x = mainFunc(25, 30);
  console.log(x);
} catch (err) {
  console.log(err);
  throw err;
} finally {
  console.log("This statement is always executed");
}
