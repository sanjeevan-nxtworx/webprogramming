// ++ - Increment
// -- - Decrement

let a = 10;
let b = 5;

let res = a++ + ++a + a;
// a++ => 10 a->11
// ++a = 12  a-> 12

console.log(res);

// console.log("Post Increment: ", a++ + b + a++);
// a = 10;
// b = 5;
// console.log("Pre Increment: ", ++a + b + ++a);
