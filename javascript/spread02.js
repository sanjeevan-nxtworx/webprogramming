let student = {
  name: "Harsh",
  age: 21,
  marks: [5, 20, 15],
};

let {
  name,
  age,
  marks: [sub1, sub2, sub3],
} = student;

console.log(name, age, sub1, sub2, sub3);
