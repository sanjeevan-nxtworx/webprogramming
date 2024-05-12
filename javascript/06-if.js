//if (conditional-expr) {
//    statements
//}

// let num = 11;

// if (num % 2 === 0) {
//   console.log(num, " is Even");
// }

// console.log("END");

let num1 = 55;
let num2 = 60;
let num3 = 70;

let max = 0;

if (num1 > num2 && num1 > num3) {
  max = num1;
}

if (num2 > num1 && num2 > num3) {
  max = num2;
}

if (num3 > num1 && num3 > num2) {
  max = num3;
}

console.log(max);

console.log("End");
