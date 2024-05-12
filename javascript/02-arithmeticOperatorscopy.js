// + - Add two operands
// - - Substract
// * - Multiply
// / - Divide
// % - Modulus

// Expression:    varNum = (10 * cNum) - 45;
// Operation:      10 * cNum
//                 res - 45
//                 varNum = res
// Operand:         data on which operations are performed
// Operator         Symbol used to perform an operation

let num1 = 10;
let num2 = 6;
let num3 = 10;
let num4 = 15;
let num5 = 35;

let result = (num1 % (num2 + 55)) - (num3 * (num4 + num5)) / num3;
//    resMod = num1 % num2 = 4
//    resMul = num3 * num4 = 150
//    resDiv = num5 / num3 = 3.5
//    resAdd1 = resMod + 55 = 59
//    resSub = resAdd1 - resMul = -91
//    resFinal = resSub + resDiv = -87.5

console.log(result);
