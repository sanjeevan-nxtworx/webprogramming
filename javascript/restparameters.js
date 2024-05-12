function sumof(num1, ...nums) {
  let sum = num1;

  for (let val of nums) {
    sum += val;
  }
  return sum;
}

let sum = sumof(10, 20, 30);
console.log(sum);

sum = sumof(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
console.log(sum);
