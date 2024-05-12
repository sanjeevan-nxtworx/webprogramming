let name = String("Amardeep Amar");
let age = 21;

let tempName = `My Name is ${name} and my age is ${age}`;

console.log(tempName);

console.log(name.lastIndexOf("Amar"));

let arrWord = tempName.split(" ");
console.log(arrWord);

// let newStr = "My Name is " + name;
// console.log(newStr);
// let uprName = name.toUpperCase();
// console.log(name, uprName);
// let bflg = name.startsWith("mar");
// console.log(bflg);

// let empID = "E101MA21";

// let id = empID.substring(1, 4);
// let gender = empID.substring(4);
// let grade = empID.substring(5, 6);
// let ageE = empID.substring(6, 8);
// console.log(id);
// console.log(gender);
// console.log(grade);
// console.log(ageE);

// let strVal = "    this is a {brace Characters} string with a        ";
// let startIdx = strVal.indexOf("{");
// let endIdx = strVal.indexOf("}");

// let subStrVal = strVal.substring(startIdx + 1, endIdx);
// console.log(startIdx, endIdx, subStrVal);
// console.log('"', strVal, '"');
// let arrChars = strVal.trim();
// console.log('"', arrChars, '"');
