function sumall(num1, num2, ...numVals) {
  let sum = num1 + num2;
  for (let num of numVals) {
    sum += num;
  }
  return sum;
}

let sum = sumall(10, 20, 30, 40, 50, 60, 70, 80);
console.log(sum);

// function sumall(num1, num2, ...numvals) {
//   let sum = 0;
//   sum += num1;
//   sum += num2;
//   for (let val of numvals) {
//     sum += val;
//   }

//   return sum;
// }

// let sum = 0;

// sum = sumall(10, 20);
// console.log(sum);

// sum = sumall(10, 20, 50, 50, 60);
// console.log(sum);

// sum = sumall(10, 20, 50, 50, 60, 10, 20, 50, 50, 60);
// console.log(sum);

// sum = sumall(10, 20, 50, 50, 60, 10, 20, 50, 50, 60, 10, 20, 50, 50, 60);
// console.log(sum);
