function isPrime(numVal) {
  let div;
  for (div = 2; div < numVal; div++) {
    if (numVal % div === 0) return false;
  }
  return true;
}

let arrVal = [19, 11, 13, 17];

console.log(
  arrVal.every((val, indx, arr) => {
    console.log(indx, arr[indx]);
    return isPrime(val);
  })
);

let newArr = arrVal.map((val) => val + 20);

console.log(newArr);

let aArr = newArr.filter((val) => isPrime(val));
console.log(aArr);
