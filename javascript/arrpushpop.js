let arrVal = new Array(10, 20, 30, 40, 50, 60);

console.log(arrVal);

arrVal.push(70, 80, 90);
console.log(arrVal);

let retVal = arrVal.pop();
console.log(arrVal);

retVal = arrVal.shift(1);
console.log(retVal, arrVal);

arrVal.unshift(5, 6, 7);
console.log(arrVal);
