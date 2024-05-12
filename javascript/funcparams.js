const sumOf = function (num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
  let sum = num1 + num2 + num3 + num4;
  return sum;
};

let res = sumOf(10, 20, 30);
console.log(res);

res = sumOf(10, 20);
console.log(res);

res = sumOf(10, 20, 30, 40, 50);
console.log(res);

res = sumOf(10);
console.log(res);
