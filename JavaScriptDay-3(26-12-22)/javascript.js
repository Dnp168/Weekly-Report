//Javascript Class Syntax

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// const myCar = new Car("Ford", 2014);
// console.log(myCar.name + " " + myCar.year)

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;

//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   let myCar = new Car("Ford", 2014);
//   console.log("My car is " + myCar.age() + " years old.")

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("Ford", 2014);
//     console.log("My car is " + myCar.age(year) + " years old.")

//JavaScript Class Inheritance
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show())

//JavaScript Static Methods
// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello() {
//         return "Hello!!";
//     }
// }

// let myCar = new Car("Ford");

// //You can call 'hello()' on the Car Class:
// console.log(Car.hello())

//   // But NOT on  a Car Object:
//   // document.getElementById("demo").innerHTML = myCar.hello();
//   // this will raise an error.

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

// let myCar = new Car("Ford");
// console.log(Car.hello(myCar))

//JavaScript Errors
// try {
//     adddlert("Welcome guest!");
// }
// catch (err) {
//     document.getElementById("demo").innerHTML = err.message;
// }


