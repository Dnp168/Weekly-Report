// JavaScript Object

// create an object
// const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// console.log(person.firstName + " is " + person.age + " years old.");

// const person1 = new Object();
// person1.firstName = "John";
// person1.lastName = "Doe";
// person1.age = 45;
// person1.eyeColor = "blue";
// console.log(person1.firstName + " is " + person1.age + " years old.");

// Oject Properties
// const person = {
//     fname: "John",
//     lname: "Doe",
//     age: 25
// };

// let txt = "";
// for (let x in person) {
//     txt += person[x] + " ";
// }
// console.log(txt);

// add new property
// const person2 = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// person2.nationality = "Indian";
// console.log(person2.firstname + " is " + person2.nationality + ".");

// Deleting Properties
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// delete person.age;
// console.log(person.firstname + " is " + person.age + " years old.");

// Nested Objects
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }
// console.log(myObj.cars.car2);

// Nested Arrays and Objects
// let x = "";
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ]
// }

// for (let i in myObj.cars) {
//     x += myObj.cars[i].name;
//     for (let j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j] + "\n";
//     }
// }
// console.log(x);

// javascript object module
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName())

// Adding Method To a Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// };
// person.name = function () {
//     return this.firstName + " " + this.lastName;
// };
// console.log("My father is " + person.name())

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// };
// person.name = function () {
//     return (this.firstName + " " + this.lastName).toUpperCase();
// };
// console.log("My father is " + person.name())

//Display using Json.stringify()
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(JSON.stringify(person));

//JavaScript Object Accessors

//JavaScript Getter (The get Keyword)
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "eng",
//     get lang() {
//         return this.language;
//     }
// };
// console.log(person.lang)

//JavaScript Setter
// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "NO",
//     set lang(value) {
//         this.language = value;
//     }
// };
// console.log(person2.language)

//Data Quality
// const obj = { counter: 0 };

// Define Setters and Getters
// Object.defineProperty(obj, "reset", {
//     get: function () { this.counter = 0; }
// });
// Object.defineProperty(obj, "increment", {
//     get: function () { this.counter++; }
// });
// Object.defineProperty(obj, "decrement", {
//     get: function () { this.counter--; }
// });
// Object.defineProperty(obj, "add", {
//     set: function (value) { this.counter += value; }
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) { this.counter -= value; }
// });

// Play with counter:
// obj.reset;
// console.log(obj.counter)
// obj.add = 5;
// console.log(obj.counter)
// obj.subtract = 1;
// console.log(obj.counter)
// obj.increment;
// console.log(obj.counter)
// obj.decrement;
// console.log(obj.counter)

//JavaScript Object Constructors
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
//   console.log("My father is " + myFather.age + ".")

//JavaScript Iterables

//Iterating Over a String
// const name = "W3Schools";
// let text = ""
// for (const x of name) {
//     text += x + "\n";
// }
// console.log(text)

//Iterating Over an Array
// const letters = ["a", "b", "c"];
// let text1 = "";
// for (const x of letters) {
//     text1 += x + "\n";
// }
// console.log(text1)

//Home Made Iterable
// function myNumbers() {
//     let n = 0;
//     return {
//         next: function () {
//             n += 10;
//             return { value: n, done: false };
//         }
//     };
// }

// // Create Iterable
// const n = myNumbers();
// n.next(); // 10
// n.next(); // 20
// n.next(); // 30
// console.log(n.next().value);

// myNumbers = {};
// myNumbers[Symbol.iterator] = function() {
//   let n = 0;
//   done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {done = true}
//       return {value:n, done:done};
//     }
//   };
// }

// let text2 = ""
// for (const num of myNumbers) {
//   text2 += num +"\n"
// }
// console.log(text2);

//JavaScript Sets
const letters = new Set(["a", "b", "c"]);
console.log(letters.size)

const letters1 = new Set();
// Add values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
console.log(letters1.size)

const letters2 = new Set(["a", "b", "c"]);
// List all Elements
let text = "";
letters2.forEach(function (value) {
    text += value + "\n";
})
console.log(text)

const letters3 = new Set(["a", "b", "c"]);
// List all Elements
let text2 = "";
for (const x of letters3.values()) {
    text2 += x + "\n";
}
console.log(text2)

const letters4 = new Set(["a", "b", "c"]);
// List all entries
const iterator = letters4.entries();
let text1 = "";
for (const entry of iterator) {
    text1 += entry + "\n";
}
console.log(text1)

//JavaScript Maps
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("apples"))
console.log(fruits.size)

fruits.delete("bananas");
console.log(fruits.has("bananas"));
console.log(typeof fruits)

let text3 = "";
fruits.forEach (function(value, key) {
  text3 += key + ' = ' + value + "\n";
})
console.log(text3)

let text4 = "";
for (const x of fruits.entries()) {
  text4 += x + "\n";
}
console.log(text4)


