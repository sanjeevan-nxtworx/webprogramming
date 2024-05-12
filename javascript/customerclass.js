class Customer {
  cart;
  #ID;
  #Name;
  #Address;
  constructor(cart, id, name, address) {
    console.log("Customer: Constructor");
    this.cart = cart;
    this.#ID = id;
    this.#Name = name;
    this.#Address = address;
  }

  login() {
    console.log("Customer: Customer has logged In");
  }

  putInCart(id, qty, rate) {
    console.log("Customer: Adding to Cart");
    console.log(this.#ID, this.#Name, this.#Address);
  }

  removeFromCart(id, qty, rate) {
    console.log("Customer: Adding to Cart");
  }

  clearCart() {
    console.log("Customer: Clearing Cart");
  }
}

class WalkInCustomer extends Customer {
  constructor(cart, id, name, address, payMode) {
    console.log("WalkIn: Constructor");
    super(cart, id, name, address);
    this.payMode = payMode;
  }

  putInCart(id, qty, rate) {
    console.log("WalkIn: Adding to Cart");
    super.putInCart(id, qty, rate);
  }
}

let wiCustomer = new WalkInCustomer(null, "C101", "Mahesh", "Mumbai", "CC");
console.log(wiCustomer);

wiCustomer.putInCart(null, 100, 100.0);

wiCustomer.Name = "Ramesh";
console.log(wiCustomer);
