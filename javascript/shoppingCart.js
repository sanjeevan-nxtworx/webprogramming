class ShoppingCart {
  constructor() {
    this.cart = new Array();
  }

  emptyCart() {
    this.cart = new Array();
  }

  addProduct(productID, qty, rate) {
    let product = {
      ID: productID,
      qty: qty,
      rate: rate,
    };

    this.cart.push(product);
  }

  removeProduct(id) {
    this.cart = this.cart.filter((product) => !(product.ID === id));
  }

  showCart() {
    console.log(this.cart);
  }
}

let myShoppingCart = new ShoppingCart();
let newShoppingCart = new ShoppingCart();

myShoppingCart.addProduct("P101", 10, 100.0);
myShoppingCart.addProduct("P201", 20, 200.0);
myShoppingCart.addProduct("P301", 30, 300.0);

newShoppingCart.addProduct("N101", 15, 150.0);
newShoppingCart.addProduct("N201", 25, 250.0);

myShoppingCart.showCart(); // ShoppingCart.showCart(myShoppingCart);

newShoppingCart.showCart();
newShoppingCart.removeProduct("N101");
newShoppingCart.showCart();
newShoppingCart.emptyCart();
newShoppingCart.showCart();
