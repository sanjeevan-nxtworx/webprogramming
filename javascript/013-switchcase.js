let size = "L"; //XXXL XXL, XL, L, M, S, XS

switch (size) {
  case "XXXL":
  case "XXL":
    console.log("Size is Extra Extra Large");
    break;
  case "XL":
    console.log("Size is Extra Large");
    break;
  case "L":
    console.log("Size of Large");
    break;
  case "M":
    console.log("Size is Medium");
    break;
  default:
    console.log("Size is Xtra Small");
    break;
}

console.log("END");

// let basicSalary = 45000.0;
// let grade = "E";

// let hra = 0;
// let da = 0;
// let ta = 0;
// let gross = 0;

// switch (grade) {
//   case "A":
//     console.log("Grade A");
//     hra = 0.1 * basicSalary;
//     if (hra > 5000) hra = 5000;
//     console.log(hra);

//     da = 0.15 * basicSalary;
//     ta = 0.05 * basicSalary;
//     break;
//   case "B":
//     console.log("Grade B");
//     hra = 0.12 * basicSalary;
//     da = 0.17 * basicSalary;
//     ta = 0.07 * basicSalary;
//     break;

//   case "C":
//     console.log("Grade C");
//     hra = 0.14 * basicSalary;
//     da = 0.18 * basicSalary;
//     ta = 0.09 * basicSalary;
//     break;
//   case "D":
//   case "F":
//     console.log("Grade D or F");
//     hra = 0.18 * basicSalary;
//     da = 0.2 * basicSalary;
//     ta = 0.1 * basicSalary;
//     break;
//   default:
//     console.log("ERROR IN GRADE");
//     break;
// }

// gross = basicSalary + hra + da + ta;
// console.log(gross, ", ", basicSalary + ", ", hra + ", " + da + ", " + ta);
