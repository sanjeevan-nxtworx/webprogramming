let bookMap = new Map();

bookMap.set("Aesop", ["Red Riding Hood", "Jack & Jill", "Humpty Dumpty"]);

bookMap.set("George Lucas", ["Star Wars", "Pirates"]);
bookMap.set("Enid Blyton", ["Famous 5", "Hardy Boys"]);
if (bookMap.has("George Lucas")) {
  let val = bookMap.get("George Lucas");
  val.push("Indiana Jones");
  bookMap.set("George Lucas", val);
}

bookMap.forEach((value, key) => {
  console.log(key);
  console.log(value);
});

console.log(bookMap.size);
