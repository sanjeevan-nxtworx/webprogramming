function stringValidate(str) {
  if (str === "") return false;
  return true;
}

function numValidate(num) {
  if (num === 0) return false;
  return true;
}
// Higher Order Function
function validateData(data, fn) {
  if (fn(data)) console.log("Data is Invalid");
  else console.log("Data is Valid");
}

validateData("", stringValidate);
validateData("ABC", stringValidate);
validateData(0, numValidate);
validateData(100, numValidate);

// Arrow Functions
console.log("**** USING ARROW FUNCTIONS ****");
validateData("", (data) => (data === "" ? false : true));
validateData("ABC", (data) => (data === "" ? false : true));
validateData(0, (data) => (data === 0 ? false : true));
validateData(100, (data) => (data === 0 ? false : true));
