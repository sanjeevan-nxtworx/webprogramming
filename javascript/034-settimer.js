setTimeout(() => {
  console.log("CALLBACK IS PERFOMED");
}, 2000);

for (let num = 0; num < 5; num++) console.log(num);

console.log("** END OF PROGRAM **");

// let numCall = 10;
// function MyFunc() {
//   setTimeout(() => {
//     console.log("Delayed for 1 second.");
//     numCall--;
//     if (numCall !== 0) MyFunc();
//     // clearInterval(nIntervId);
//   }, "1000");

//   console.log("In My Function");
// }

// function MySecondFunc() {
//   console.log("In My Second Function");
// }

// MyFunc();
// setTimeout(() => {
//   console.log("Delayed for 2 second.");
//   // clearInterval(nIntervId);
// }, "2000");
// setTimeout(() => {
//   console.log("Delayed for 3 second.");
//   // clearInterval(nIntervId);
// }, "3000");
// MySecondFunc();
// console.log("This is the program end");

// // nIntervId = setInterval(() => {
// //   console.log("In Interval");
// // }, 1000);

// console.log("Start of Program");
// setTimeout(() => {
//   console.log("Timeout Done");
//   clearInterval(nInterID);
// }, 6500);

// let nInterID = setInterval(() => {
//   console.log("Called from Interval");
// }, 1000);
// console.log("Program Done");
