let numArr = new Array(14, 30, 2, 15, 50);

//
let newArr = numArr.sort((num1, num2) => num2 - num1);
// let newArr = numArr.sort();
console.log(newArr, numArr);

let res = numArr.reduce((acc, num) => {
  console.log(acc, num);
  return acc + num;
});
let product = numArr.reduce((acc, num) => acc * num, 2);
console.log(res, product);
