/*function sumof(num1, num2, ...nums) {
  console.log(typeof nums);
  return nums.reduce((accum, val) => accum + val, num1 + num2);
}
*/

function sumof(num1, num2, ...numarr) {
  return numarr.reduce((acc, val) => acc + val, num1 + num2);
}

let sum = sumof(10, 20, 30, 40, 50);
console.log(sum);
sum = sumof(10, 20);
console.log(sum);
sum = sumof(10, 20, 30, 40, 50, 60, 70);
console.log(sum);

let arr = new Array(10, 20, 30, 40, 50, 60, 70, 80);

sum = sumof(...arr);

console.log(sum);
