class User {
  constructor(name, email, password, telNo = "", age = 0) {
    // declare instance variables
    this.name = name;
    this.email = email;
    this.telNo = telNo;
    this.age = age;
    this.password = password;
    this.isLoggedIn = false;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;
      return true;
    }

    return false;
  }

  logout() {
    this.isLoggedOut = false;
  }
}

class AdminUser extends User {
  constructor(name, email, password, addUser = false, telNo = "", age = 0) {
    super(name, email, password, telNo, age);
    this.addUserFlg = addUser;
  }

  canChangeUser(email, password) {
    if (super.login(email, password)) return this.addUserFlg;
    return false;
  }

  static displayUserType() {
    console.log("** ADMIN USER **");
    console.log(this.email);
    return true;
  }
}

// let varName = "Hello World";
// let user = new User("Abhijeet", "ab@abc.com", "abc", "918273748585", 21);
// let myUser = new User("Imran", "im@yahoo.com", "im");

let adminUserMain = new AdminUser("Praful", "pro@abc.com", "pro", true);

AdminUser.displayUserType();
adminUserMain.login("abc@abc.com", "abc");

// console.log(adminUserMain);

// let logflg = adminUserMain.login("pro@abc.com", "pro");
// console.log(logflg);

// let userFlg = adminUserMain.canChangeUser("pro@abc.com", "prio");
// console.log(userFlg);
