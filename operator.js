//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric Operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(2 / 1); // divide
console.log(2 * 1); // multiply
console.log(5 % 2); // remainer
console.log(2 ** 3); // exponentiation

//3. Increment & Decrement Operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement = counter = 3
const postIncrement = counter++;
// counter = counter + 1;
// postIncrement + 1 = counter
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement = 3, counter = 4

const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement = counter = 2
const postDecrement = counter--;
// counter = counter - 1;
// postDecrement - 1 = counter
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement = 3, counter = 2

//4. Assignment Operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison Operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) : if first value = true, no more search - put complex variable behind
console.log(`or: ${value1 || value2 || check()}`);

// && (and) : if first value = false, no more search = put complex variable behind
console.log(`or: ${value1 && value2 && check()}`);

// and : often use to compress long if-statement
// e.g. nullableObject && nullableObject.something - nullableObject: null -> nullableObject.something is not running.

// ! (not)
console.log(!value1);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("🥵");
  }
  return true;
}

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive != numberFive); // false

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" }; // ellie1, ellie2 have different reference
const ellie3 = ellie1; // ellie1, ellie2 have same reference
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality quiz!
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true!
console.log(null === undefined); //false

// 8. Conditional Operators: if
// if, else if, else
const name = "df";
if (name === "ellie") {
  console.log("Welcome, ellie!");
} else if (name === "coder") {
  console.log("You are an amazing coder!");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch Statement
// use for checking multiple ifs
// use for checking enum-like value
// use for checking multiple types in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break; // stop here
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break; // stop here
  default:
    console.log("same all");
    break;
}

// 11. Loops
// while loop: if the condition is true, body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop: body code is executed first, then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop: for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// for loop > inline variable declaration
for (let i = 3; i > 0; i--) {
  console.log(`inline variable for: ${i}`);
}

// nested loops: bad efficiency. not recommended
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let k = 0; k <= 10; k++) {
  if (k % 2 === 0) {
    console.log(k);
  } else {
    continue;
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let k = 0; k <= 10; k++) {
  if (k === 8) {
    break;
  } else {
    console.log(k);
  }
}
