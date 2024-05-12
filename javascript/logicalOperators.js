// Logical operators - join 2 relation operations
// && - Logical And
// || - Logical OR
// !  - Local NOT
// &  - Logical AND - Non-Short Circuiting
// |  = Logical OR  - Non-Short Circuiting

// AND
// false & false = false
// true  & false = false
// false & true  = false
// true  & true  = true

// OR
// false or false = false
// true  or false = true
// false or true  = true
// true  or true  = true

let num1 = 10;
let num2 = 20;
let num3 = 30;

let result = (num2 < num1) & console.log("HERE");

console.log(!result);

// let result2 = !((num1 > num2 && num3 > 30) || num2 > num3);
// console.log(result2);

// result = num1 / (num2 * num3);
// console.log(result);
