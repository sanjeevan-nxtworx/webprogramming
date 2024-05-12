function isPrime(numVal) {
  let div;
  for (div = 2; div <= numVal / 2; div++) {
    if (numVal % div === 0) return false;
  }
  return true;
}

let listofnums = new Array(10, 12, 13, 17, 22, 44, 29, 31, 49, 62, 75, 83, 111);

// console.log(listofnums[0]);
// console.log(listofnums[5]);
// listofnums[3] = 27;
// console.log(listofnums);
// listofnums[10] = 100;
// console.log(listofnums);

let primeNum = new Array();

console.log("Before: ", primeNum);

for (let val of listofnums) {
  if (isPrime(val)) {
    primeNum.push(val);
  }
}

// let idx = 0;

// for (let val of listofnums) {
//   if (isPrime(val)) {
//     primeNum[idx] = val;
//     idx++;
//   }
// }

// for (let num = 0; num < listofnums.length; num++) {
//   if (isPrime(listofnums[num])) {
//     primeNum[idx] = listofnums[num];
//     idx++;
//   }
// }

console.log("After: ", primeNum);
console.log("**END**");

// let arrName = new Array();

// arrName.push(["Hrushikesh", 100, 99, 92]);
// arrName.push(["Amardeep", 100, 99, 98]);
// arrName.push(["Mitali", 100, 99, 98]);
// arrName.push(["Atharva", 100, 99, 98]);
// arrName.push(["Kunal", 100, 99, 98]);

// for (let i = 0; i < arrName.length; i++) {
//   console.log(arrName[i][0]);
//   console.log("Marks: ");
//   for (let j = 0; j < 3; j++) {
//     console.log(arrName[i][j + 1]);
//   }
// }
