"use strict";
/* Object-oriented programming
class: template
object: instance of a class

Javascript classes
- introduced in ES6
- syntatical sugar over prototype-based inheritance */

// 1. Class declarartion
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age; // constructor > this.age : bringing get age() > this._age
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
    // constructor this.age = age : bringing set age() > this._age
  }
}

const user1 = new User("steve", "jobs", -1);
console.log(user1.age);

// Fields (public, private)
// recent released - rarely used
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Article {
  static publisher = "Dream coding"; // in Class. not in object
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher); // call the class
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // call parent's method
    console.log("🔺"); // override
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color : ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "red");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(10, 10, "blue");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(rectangle instanceof Object); //true
console.log(rectangle instanceof Shape); //true

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
