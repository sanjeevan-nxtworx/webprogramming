function sumof(num1, num2, ...numArr) {
  let sum = num1 + num2;
  for (let val of numArr) sum += val;
  return sum;
}

let res = sumof(10, 20, 30);
console.log("Result = ", res);
res = sumof(10, 20, 30, 40, 50, 60, 70, 80);
console.log("Result = ", res);
