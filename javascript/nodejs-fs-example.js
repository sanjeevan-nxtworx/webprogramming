// Include the fs module
// Node.js program to demonstrate the
// fs.open() Method

// Include the fs module
const fs = require("fs");

console.log("Open file!");

// To open file in write and read mode,
// create file if doesn't exists.
fs.open("demo.txt", "w+", function (err, f) {
  if (err) {
    return console.error(err);
  }
  console.log(f);
  console.log("File opened!!");
});
