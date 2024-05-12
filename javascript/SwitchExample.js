let basicSalary = 45000.0;
let grade = "B";

let hra = 0;
let da = 0;
let ta = 0;
let gross = 0;

// A = HRA, DA, & TA
// B = DA & TA
// C = TA

switch (grade) {
  case "A":
    hra = 0.15 * basicSalary;
  case "B":
    da = 0.1 * basicSalary;
  case "C":
    ta = 0.05 * basicSalary;
    break;
  default:
    console.log("Error in Grade");
    hra = da = ta = 0.0;
    break;
}

gross = basicSalary + hra + da + ta;
console.log(
  gross,
  ", ",
  basicSalary + ", ",
  hra + ", " + da + ", " + ta + ", " + grade
);
