function insertArray(arr, dataVal, pos) {
  let idx = 0;
  for (idx = arr.length; idx > pos; idx--) {
    arr[idx] = arr[idx - 1];
  }
  arr[idx + 1] = dataVal;
}

let arrVal = new Array(10, 20, 30, 40, 50);

console.log(arrVal);
insertArray(arrVal, 25, 1);
insertArray(arrVal, 35, 3);
console.log(arrVal);

let ix = arrVal.findIndex((num) => num == 40);

console.log(ix);
