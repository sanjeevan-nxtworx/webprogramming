let longWait = async function () {
  let i = 0;
  while (i < Number.MAX_SAFE_INTEGER / 10000000) i++;
};

let p = new Promise(async (f, r) => {
  console.log("Hello World");
  await longWait();
  r("HELLO WORLD");
});

console.log(p);
p.then((val) => console.log("Fullfilled: ", val)).catch((err) =>
  console.log("REJECTED: ", err)
);

console.log("END");
