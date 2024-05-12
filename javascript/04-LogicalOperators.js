// Logical Operators
// && - Logical AND  True && True = True, True && false = false,
// || - Logical OR   True || True = True, True || false = true
// !  - Logical NOT - Unary   True->False, False->True
// & - Logical AND - Same truth table as Logical && but not short Circuiting
// | - Logical OR - Same Truth table but on short Circuiting

let num1 = 100;
let num2 = 102;
let num3 = 55;

let max = 0;

let flg = num1 > num2 && num1 > num3;
flg = num2 > num1 && num2 > num3;

flg = 100;
console.log(!flg);
console.log(flg);

num1 += num2;

console.log(num1, num2, num3, max);
