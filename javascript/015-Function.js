// function isPrime(numVal) {
//   let div;
//   for (div = 2; div < numVal; div++) {
//     if (numVal % div === 0) return false;
//   }
//   return true;
// }

// function CalcVal(numVal, num2Val) {
//   if (isPrime(numVal) && isPrime(num2Val)) return numVal + num2Val;
//   else return numVal - num2Val;
// }

// let result;
// let num2 = 5;
// result = CalcVal(num2, 23);
// console.log(result);
// let num3 = 10;
// result = CalcVal(num3, 4);
// console.log(result);

function sumof(start, end) {
  let sum = 0;
  for (let num = start; num <= end; num++) {
    sum += num;
  }
  return sum;
}

let res = sumof(100, 102, 200);
console.log("Sum is ", res);
