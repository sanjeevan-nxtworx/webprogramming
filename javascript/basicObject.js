let names = ["Kirti", "Harsh", "Natasha"];

let student = {
  Name: "Kirti",
  age: 27,
  marks: [10, 20, 30, 40],
  avgMarks: 0,
  getsum: function () {
    let sum = 0;
    for (val of this.marks) sum += val;
    return sum;
  },
};

let student2 = {
  Name: "Harsh",
  age: 18,
  marks: [15, 40, 70, 20, 25],
  avgMarks: 0,
  getsum: function () {
    let sum = 0;
    for (val of this.marks) sum += val;
    return sum;
  },
};

let studentArr = new Array(student, student2);

console.log(studentArr["1"].marks["2"]);
