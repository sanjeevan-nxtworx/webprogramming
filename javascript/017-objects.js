let item = {
  code: "ITEM001",
  name: "Shirts",
  qoh: 100,
  rate: 999.5,
  size: "XL",
  description: "Peter England Large Size",
  data: {
    row: 10,
    col: 20,
  },
};

let newItem = item;

console.log(item);
console.log(newItem);
newItem.qoh = 400;
newItem["qoh"] = 500;
console.log(newItem.data.row);

console.log(item);

console.log("Iterating through the Keys");
for (let x in newItem) {
  console.log(x, newItem[x]);
}
