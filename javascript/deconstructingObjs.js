let bookObj = {
  name: "Harry Potter",
  author: "J K Rowling",
  numPage: 1004,
  qoh: 100,
};

let { name, author, qoh } = { ...bookObj };

console.log(name, author, qoh);

console.log(typeof Math);
