// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";

//2. Variable: can change their value
// let (added in ES6)

// block scope : just applied in block
{
  let name = "ellie";
  console.log(name); // ellie
  name = "hello";
  console.log(name); // hello
}
// global scope : applied everywhere. use a lot of memory (not recommended)
let globalName = "global name";

// var (don't ever use this!)
// var hoisting: move declaration from bottom to top - it's okay to give value first, declare later (bad coding)
// var has no block scope
{
  age = 4;
  var age;
}
console.log(age);

//3. Constants
// always better to use immutable data type for a few reasons :
// 1) security
// 2) thread safety
// 3) reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all default objects are mutable in JS

//4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol -> storing value
// object, box container -> storing reference
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // type: number
console.log(`value: ${size}, type: ${typeof size}`); // type: number

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(NaN);

// bigInt (new feature. don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c"; // character but string in JS
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null: give value 'null'
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined: don't give value
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol: create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id"); // same symbol for 'id'
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// object: real-life object, data structure
const ellie = { name: "ellie", age: 20 }; // can't change ellie object. can change name, age
ellie.age = 21;
console.log(ellie.age);

// 5. Dynamic typing (Dynamically Changed Language): Change type continuously
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // string
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // number
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error!
