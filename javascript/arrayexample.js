function add5toarray(val) {
  for (let idx = 0; idx < val.length; idx++) val[idx] += 5;
}

let names = ["Harry", "Joe", "kirti", "Natasha", "Harsh"];
let ages = [15, 20, 19, 17, 21];
console.log(ages.at(-6));

let str = "This is a string";
// console.log(ages);
// add5toarray(ages);
// console.log(ages);

// let newAges = ages;
// ages[2] = 100;
// console.log(ages);
// console.log(newAges);

// let num = 10;
// let num2 = num;

// num = 15;
// console.log(num);
// console.log(num2);

// sum = 0;
// for (let num of ages) {
//   sum += num;
// }

// console.log(sum);

// const isPrime = (no) => {
//   // no is a function parameter
//   let divisor = 2;
//   let isprime = true;
//   while (divisor < no / 2) {
//     if (no % divisor === 0) {
//       isprime = false;
//       break;
//     }
//     divisor++;
//   }
//   return isprime;
// };

// function printIfPrime(primeflg, no) {
//   if (!primeflg) console.log(no, " Is not a Prime Number");
//   else console.log(no, " Is a Prime Number");
// }

// 1. start from 2   divisor = 2 until diviser < num
// 2. check if num % divisor gives a zero remainder, if yes, not prime
// 3. increment divisor. Goto 1

// let numArr = new Array(19, 27, 36, 22, 39, 63, 41, 45, 93, 62);
// //let numArr = [19, 27, 36, 22, 39, 63, 41, 45, 93, 62];
// numArr.push(21, 53, 25, 27, 42, 22, 105);
// numArr.sort((num1, num2) => {
//   if (num1 < num2) return 1;
//   if (num1 > num2) return -1;
//   return 0;
// });

// let numArrPlus100 = numArr.map((num) => num + 100);

// ((strVal) => {
//   console.log(strVal);
// })("Hello WOOOOOORRRRRLLLLLDDDD");

// console.log(numArr);
// console.log(numArrPlus100);

// let num = [5, 9, 12, 24, 67];
// let sum = num.reduce((accumulator, curValue) => accumulator + curValue, 100);

// console.log(sum);

// let diffTypeArr = [5, true, "Hello World"];
// console.log(diffTypeArr);

/*
let oddArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(numArr);
console.log(oddArr);

for (let num of numArr) {
  console.log(num);
}
*/
/*
let val = numArr.findIndex((num) => {
  return num === 27;
});

console.log("Number found at index ", val);



for (let idx = 0; idx < numArr.length; idx++) {
  console.log("Index is ", idx, " Value is ", numArr[idx]);
  let flg = false;

  flg = isPrime(numArr[idx]); // Passing num as an argument
  printIfPrime(flg, numArr[idx]);
}


let flg = false;

flg = isPrime(num); // Passing num as an argument
printIfPrime(flg, num);

flg = isPrime(num); // Passing num as an argument
printIfPrime(flg, num);

flg = isPrime(num); // Passing num as an argument
printIfPrime(flg, num);
*/
