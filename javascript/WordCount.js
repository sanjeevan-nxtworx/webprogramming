class WordCount {
  constructor(word) {
    this.word = word;
    this.count = 1;
  }
}

let inputString = `Hurricane Erika was a weak hurricane that struck extreme northeastern Mexico near the Texas–Tamaulipas border in mid-August of the 2003 Atlantic hurricane season. Erika was the eighth tropical cyclone, fifth tropical storm, and third hurricane of the season. At first, the National Hurricane Center (NHC) operationally did not designate it as a hurricane because initial data suggested winds of 70 mph (110 km/h) at Erika's peak intensity. It was not until later data was analyzed that the NHC revised it to Category 1 intensity in the Saffir-Simpson Hurricane Scale. The storm developed from a non-tropical area of low pressure that was tracked for five days before developing in the eastern Gulf of Mexico on August 14. Under the influence of a high pressure system, Erika moved quickly westward and strengthened under favorable conditions. It made landfall as a hurricane on northeastern Mexico on August 16, and the storm's low-level circulation center dissipated by the next day. However, the storm's mid-level circulation persisted for another three days, emerging into the East Pacific and moving northwestward over Baja California, before dissipating on August 20.
While Erika's precursor disturbance was moving across Florida, it dropped heavy rainfall. In south Texas, Erika produced moderate winds of 50 to 60 mph (80 to 97 km/h) along with light rain, causing minor and isolated wind damage in the state. In northeastern Mexico, Erika produced moderate amounts of rainfall, resulting in mudslides and flooding. There, two people were killed when their vehicle was swept away by floodwaters."`;

console.log(inputString);

let wordArray = inputString.split(" ");

let wordList = new Set();

for (let word of wordArray) {
  wordList.add(word.toLowerCase());
}

//let wordList = []; // contains an array of WordCount objects
// let wordList = new Map();
// let startTime = Date.now();

// for (let word of wordArray) {
//   let newWord = word.toLowerCase();
//   if (wordList.has(newWord)) {
//     let count = wordList.get(newWord) + 1;
//     wordList.set(newWord, count);
//   } else wordList.set(newWord, 1);

//   //   let findIdx = wordList.findIndex(
//   //     (wordobj) => wordobj.word.toLowerCase() === word.toLowerCase()
//   //   );
//   //   if (findIdx !== -1) {
//   //     wordList[findIdx].count++;
//   //   } else {
//   //     wordList.push(new WordCount(word));
//   //   }
// }
// let endTime = Date.now();

console.log(wordList);
console.log(wordList.size);
// console.log("Time taken = ", endTime - startTime);
// console.log("Number of Words is ", wordList.length);
