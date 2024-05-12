function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    console.log("ASYNC");
    setTimeout(() => {
      console.log("Promise Resolved");
      reject(100);
    }, 2000);
  });
}

let asyncResult = resolveAfter2Seconds()
  .then((res) => {
    console.log("AFTER PROMISE", res);
  })
  .catch((err) => {
    console.log("ERROR RETURN: ", err);
  })
  .finally(() => {
    console.log("THIS IS ALWAYS CALLED");
  });

console.log("This is async return value ", asyncResult);
console.log("Done");
