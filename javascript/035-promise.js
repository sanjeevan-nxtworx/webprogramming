function myPromiseFunc() {
  saySomething = new Promise((resolve, reject) => {
    console.log("In Promise");
    setTimeout(() => resolve("Hello World"), 3000);
  });
  return saySomething;
}

let myPromise = myPromiseFunc();

console.log(myPromise);

// Executes if there is a successful response
myPromise
  .then((value) => {
    console.log("RESOLVED: :", value);
  })
  // Executes if there is an error
  .catch((error) => {
    console.log("ERROR: ", error);
  })
  .finally(() => {
    console.log("This is end of promise");
  });

console.log("Log this statement first");
