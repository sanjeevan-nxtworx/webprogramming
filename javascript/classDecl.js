class Student {
  #name = "";
  #age = 0;
  #avgMarks = 0.0;
  static numStudents = 0;
  constructor(name, age = 0) {
    this.#name = name;
    this.#age = age;
    this.#avgMarks = 0.0;
    Student.numStudents++;
  }

  static ShowNumberOfStudents() {
    return Student.numStudents;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  displayAge() {
    console.log(this.#age);
  }

  displayName() {
    console.log(this.#name);
  }
}

class PrimaryStudent extends Student {
  #rollNo;
  constructor(name, age = 0, rollNo) {
    super(name, age);
    this.#rollNo = rollNo;
  }
}

let pSudent = new PrimaryStudent("Natasha", 10, 102);

// let student = new Student("Natasha", 10);
// console.log(Student.ShowNumberOfStudents());
// student1 = new Student("Natasha1", 10);
// console.log(Student.ShowNumberOfStudents());
// student2 = new Student("Natasha1", 10);
// console.log(Student.ShowNumberOfStudents());
// student3 = new Student("Natasha1", 10);
// console.log(Student.ShowNumberOfStudents());
// student4 = new Student("Natasha1", 10);
// console.log(Student.ShowNumberOfStudents());

// console.log(student);
// student.displayAge();

// class Book {
//   #author;
//   constructor(name, author, isbn, inStock = 0, isLoan = true) {
//     this.name = name;
//     this.isbn = isbn;
//     this.noInStock = inStock;
//     this.#author = author;
//     this.isLoanable = isLoan;
//     this.noLoaned = 0;
//   }

//   // set Author(author) {
//   //   this.#author = author;
//   // }

//   // get Author() {
//   //   return this.#author;
//   // }
//   getBook(name) {
//     if (name === this.name) return true;
//     return false;
//   }

//   loanBook() {
//     if (this.noInStock - this.noLoaned > 0) {
//       this.noLoaned++;
//       this.#author = "Hello";
//       return true;
//     }
//     return false;
//   }

//   returnBook() {
//     this.noLoaned--;
//   }

//   removeBookFromStock() {
//     this.noInStock--;
//   }

//   sellBook() {
//     this.removeBookFromStock();
//   }

//   showBookDetails() {
//     console.log(this);
//   }
// }

// let book = new Book("Jack & Jill", "Aesop", "10038AVC", 5, true);

// book.Author = "Aesop";
// book.loanBook();
// // book.author = "Jack";
// console.log(book.Author);

// book.showBookDetails();
// book.loanBook();
// book.showBookDetails();
// book.loanBook();
// book.showBookDetails();
// book.returnBook();
// book.showBookDetails();
// book.removeBookFromStock();
// book.showBookDetails();

// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
// console.log(book.loanBook());
