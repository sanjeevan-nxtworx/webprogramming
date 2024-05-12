let n = 5.05;

let o = 10.1 / 2.0;
console.time();
for (let i = 0; i < 10; i++) {
  let x = Math.pow(i + 2, 20);
  console.log(x);
}
let t2 = console.timeEnd();

// function max(num1, num2, ...values) {
//   let max = num1 + num2;
//   for (let val of values) {
//     max += val;
//   }
//   return max;
// }

// function spreadEx(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// let m = max(10, 15, 109, 39, 59, 59);
// m = spreadEx(...[30, 40, 50]);
// console.log(m);
