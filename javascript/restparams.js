function sumof(num1, num2, ...nums) {
  console.log(typeof nums);
  return nums.reduce((accum, val) => accum + val, num1 + num2);
}

let sum = sumof(10, 20, 30, 40, 50);
console.log(sum);

// function minof(...nums) {
//   let min = Infinity;

//   for (let value of nums) {
//     if (value < min) min = value;
//   }
//   return min;
// }

// let min = minof(5, 10, 15, 2, 25, 30, 35);
// console.log(min);
