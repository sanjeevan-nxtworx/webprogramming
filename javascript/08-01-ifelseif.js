//if (conditional - expr) {
//    statements
//}
//else
//if (conditional - expr) {
//    statements
//}
//else
//if (conditional - expr) {
//    statements
//}
//else {
//    statements
//}

// let num = 11;

// if (num % 2 === 0) {
//   console.log(num, " is Even");
//   console.log("End of Block");
// }

// console.log("END");

let num1 = 55;
let num2 = 60;
let num3 = 50;

let max = 0;

if (num1 > num2 && num1 > num3) {
  max = num1;
} else if (num2 > num1 && num2 > num3) {
  max = num2;
} else {
  max = num3;
}

console.log(max);

console.log("End");
