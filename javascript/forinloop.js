let bookObj = {
  name: "Harry Potter",
  author: "J K Rowling",
  numPage: 1004,
  qoh: 100,
};

for (let key in bookObj) {
  console.log("Key = ", key, "Value = ", bookObj[key]);
}

// console.log(bookObj["name"]);
// console.log(bookObj["author"]);
// console.log(bookObj["numPage"]);
// console.log(bookObj["qoh"]);

// console.log(bookObj.name);
// console.log(bookObj.author);
// console.log(bookObj.numPage);
// console.log(bookObj.qoh);
