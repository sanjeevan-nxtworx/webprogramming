// var sVal = 0;

// function sum(n1, n2) {
//   sVal = sVal + n1 + n2;
//   return sVal;
// }

// console.log(sum(10, 20), sVal);

// console.log(sum(20, 30), sVal);

let val = new Array(10, 20, 30, 40, 50);
let newArr = val.map((elVal, index) => {
  console.log(elVal, index);
  return elVal + 5;
});

console.log(newArr);
