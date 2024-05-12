let arrAge = new Array(15, "112", true, 65, 30, 21, 20, 20);

let sortArr = arrAge.sort((num1, num2) => {
  if (num1 < num2) return 1;
  if (num1 > num2) return -1;
  return 0;
});
console.log(sortArr);

// let sumfunc = (acc, val) => {
//   if (val % 2 === 0) return acc + val;
//   return acc;
// };

// let sum = arrAge.reduce(sumfunc, 0);

// console.log(sum);

// let newArr = arrAge.map((val, iVal) => {
//   if (val < 20) val += 5;
//   else if (val < 31) val += 10;
//   else val += 20;
//   console.log(iVal);
//   return val;
// });

// console.log(newArr);

// let newArr = arrAge.filter((val) => val > 20);
// console.log(newArr);
// console.log(arrAge);

// for (let num = 0; num < newArr.length; num++) {
//   console.log(newArr[num]);
// }

// const isBelowThreshold = (currentValue) => currentValue < 50;

// let flg = arrAge.every((currentValue) => currentValue < 50);

// for (let val of arrAge) {
//   if (val >= 50) {
//     flg = false;
//     break;
//   }
// }

//console.log(flg);
