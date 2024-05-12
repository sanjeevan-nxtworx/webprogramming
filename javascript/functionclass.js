function Item(id, name, descr, price, discount) {
  this.id = id;
  this.name = name;
  this.descr = descr;
  this.price = price;
  this.discount = discount;

  this.getName = function () {
    return this.name;
  };
}

Item.prototype.ShowItem = function () {
  console.log(this);
};

Item.prototype.getPrice = function () {
  console.log("Get Price");
};

Item.prototype.isVal = true;

let myItem = new Item("ID101", "Shirts", "Peter England Large", 999.5, 0.1);
let newItem = new Item("ID201", "Pants", "Van Heusen Large", 1999.5, 0.15);
myItem.ShowItem();
newItem.ShowItem();
