class Item {
  constructor(
    id = "101",
    name = "EMPTY",
    descr = "EMPTY",
    price = 0.0,
    discount = 0.0
  ) {
    this.id = id;
    this.name = name;
    this.descr = descr;
    this.price = price;
    this.discount = discount;
  }

  ShowItem = function () {
    console.log(this);
  };

  getPrice = function () {
    console.log("Get Price");
  };

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }
}

let myItem = new Item("ID101", "Shirts", "Peter England Large", 999.5, 0.1);
let newItem = new Item("ID201", "Pants", "Van Heusen Large", 1999.5, 0.15);
let zeroItem = new Item();
zeroItem.Name = "Trousers";

console.log(myItem.name);
console.log(myItem.descr);

myItem.name = "Trousers";
myItem.descr = "These are Trousers";

console.log(myItem.name);
console.log(myItem.descr);
