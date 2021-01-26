"use strict";
/* Objects
one of the JS's data types.
a collection of related data and/or functionality.
nearly all objects in JS are intances of Object.
object = {key : value}; */
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // code and test
console.log(ellie["name"]); // if you don't know the value before running
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "davie", age: 5 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for .. in vs for .. of
//  1) for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

//  2) for (value of iterable - array)
const array = [1, 2, 3, 4];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: "ellie", age: "20" };
const user2 = user;
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);
