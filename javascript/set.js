let colors = new Set(["Red", "Green", "Blue", "Red"]);

console.log(colors);
colors.add("Purple");
console.log(colors);
colors.delete("Purple");

console.log(colors.size);
