function sumof(num1, num2, num3 = 0, num4 = 0) {
  console.log(num1, " ", num2, " ", num3, " ", num4);
  return num1 + num2 + num3 + num4;
}

let sum = sumof(10, 30, 50, 60);
console.log(sum);

sum = sumof(10, 30, 50);
console.log(sum);

sum = sumof(10, 30);
console.log(sum);

sum = sumof(10);
console.log(sum);
