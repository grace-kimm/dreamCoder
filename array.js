"use strict";

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const animals = ["🐶", "🐱"];
console.log(animals);
console.log(animals.length);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[(animals, length - 1)]);
console.clear();

// 3. Looping over an array
// print all animals
//  1) for
for (let i = 0; i < animals.length - 1; i++) {
  console.log(animals[i]);
}

//  2) for of
for (let animal in animals) {
  console.log(animal);
}

//  3) forEach
animals.forEach((animal) => console.log(animal));

// 4. Addition, Deletion, Copy
//  1) push: add an item to the end
animals.push("🐭", "🐹");
console.log(animals);

//  2) pop: remove an item from the end
animals.pop();
console.log(animals);

//  3) unshift: add an item to the beginning
animals.unshift("🐰", "🦊");
console.log(animals);

//  4) shift: remove an item to the beginning
animals.shift();
console.log(animals);
// * note! shift, unshift are slower than pop, push

//  5) splice: remove an item by index position
animals.push("🐻", "🐼", "🐨");
console.log(animals);
animals.splice(1, 1);
console.log(animals);
animals.splice(1, 0, "🐯"); // delete + insert at specific position
console.log(animals);

//  6) combine two arrays
const animals2 = ["🦁", "🐮"];
const newAnimals = animals.concat(animals2);
console.log(newAnimals, typeof newAnimals);
console.log(animals, typeof animals);

// 5. Searching
//  1) indexOf: find the index
console.clear();
console.log(animals);
console.log(animals.indexOf("🐹")); // -1 : not included
console.log(animals.indexOf("🐼"));
console.log(animals.indexOf("🐻"));

//  2) includes
console.log(animals.includes("🐹")); // false
console.log(animals.includes("🐼")); // true

//  3) lastIndexOf
console.log(animals.lastIndexOf("🐹"));
console.log(animals.lastIndexOf("🐻"));
