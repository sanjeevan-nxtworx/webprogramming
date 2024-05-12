let addFunc = require("./module2").sumVal;
let decFunc = require("./module2").diffVal;
let printFunc = require("./module2").printVal;

let res = decFunc(50, 60);
console.log(res);
res = addFunc(50, 60);
console.log(res);

printFunc(10);

