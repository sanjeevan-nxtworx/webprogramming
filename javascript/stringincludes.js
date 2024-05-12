let strValue = "The quick the brown fox jumps over the lazy dog.";

console.log(strValue.includes("lazy"));
console.log(strValue.lastIndexOf("the"));

strValue = "hello";

let newStrValue = strValue.repeat(10);
console.log(newStrValue);

newStrValue = strValue.padStart(10, "#");
console.log(strValue);
console.log(newStrValue);

strValue = "100";
console.log(parseInt(strValue));
let num = 100;
strValue = num.toString();
