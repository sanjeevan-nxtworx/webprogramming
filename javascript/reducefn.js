let numArr = new Array(10, 20);

let sum = numArr.reduce((prevVal, currVal) => prevVal * currVal, 100);

console.log("Sum = ", sum);

console.log(numArr.at(-2));
