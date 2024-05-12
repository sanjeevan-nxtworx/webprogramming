let myCollection = new Array(
  { name: "John", role: "Author", age: 45 },
  { name: "Harry", role: "Publisher", age: 48 },
  { name: "Mary", role: "Subscriber", age: 24 },
  { name: "James", role: "Distributer", age: 34 }
);

for (let person of myCollection) {
  console.log(person);
}

console.log("**FINDING HARRY **");

let findObj = myCollection.find((obj) => obj.name === "Harry");
console.log(findObj);

// Now using a map

var mapPersons = new Map();
mapPersons.set("John", { name: "John", role: "Author", age: 45 });
mapPersons.set("Harry", { name: "Harry", role: "Publisher", age: 48 });
mapPersons.set("Mary", { name: "Mary", role: "Subscriber", age: 24 });
mapPersons.set("James", { name: "James", role: "Distributer", age: 34 });

let myPersonObj = mapPersons.get("James");
console.log("Map Search: ", myPersonObj);

let mapPersonsTwo = new Map([
  ["John", { name: "John", role: "Author", age: 45 }],
  ["Harry", { name: "Harry", role: "Publisher", age: 48 }],
  ["Mary", { name: "Mary", role: "Subscriber", age: 24 }],
  ["James", { name: "James", role: "Distributer", age: 34 }],
]);

console.log(mapPersons.values());

for (let keyVal of mapPersonsTwo.keys()) {
  console.log(keyVal);
}

console.log(mapPersons.has("Maryanne"));

mapPersons.forEach((obj) => console.log("Object: ", obj));
