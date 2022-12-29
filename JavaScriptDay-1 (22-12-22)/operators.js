//Operators

//Arithmetical Operator
// alert( '1' + 2 ); 
// alert( 1 + '2' );

// let a = 3;
// let x = (100 + 50) * a;
// let y = (100 - 40) / a;
// alert(x);
// alert(y);

//Assignment Operators

// let x = 10;
// x += 5;
// alert(x);
// x -= 5; 
// alert(x);
// x *= 5;
// alert(x);
// x /= 5;
// alert(x);

//Adding JavaScript Strings
// let text1 = "John";
// let text2 = "Doe";
// let text3 = text1 + " " + text2;
// alert(text3);

//Adding Strings and Numbers
// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// alert(z);
// alert(x);
// alert(y);

//Comparison Operators
// let x = 5;
// alert(x==8);
// alert(x==5);
// alert(x=="5");
// alert(x===5);
// alert(x==="5");
// alert(x!=8);
// alert(x!==5);
// alert(x!==8);
// alert(x>8);
// alert(x<8);
// alert(x>=8);
// alert(x<=8);

//Logical Operator
// let x = 6;
// let y = 3;
// alert(x < 10 && y > 1);
// alert(x == 6 || y == 5);
// alert(x == 5 || y == 5);
// alert(!(x > y));
// alert(!(x===y));

//Bitwise Operator
// alert(5 & 1);
// alert(5 | 1);
// alert(5 ^ 1);
// alert(~5);
// alert(5<<1);
// alert(5>>1);

//Looping

//while loop
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "The number is " + i + "\n";
//   i++;
// }
// alert(text);

//do while loop
// let text = "";
// let i = 0;
// do {
//   text += i + "\n";
//   i++;
// }
// while (i < 5);
// alert(text);

//for loop
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// alert(text);

//for in loop
// const person = {fname:"John", lname:"Doe", age:25}; 
// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }
// alert(txt);

//for of loop
// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
// }
// alert(text);

//if else statement
// const hour = new Date().getHours(); 
// let greeting;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// alert(greeting);

//switch statement
// let day;
// switch (new Date().getDay()) { 
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// alert(day);

//function
// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   alert(myFunction(4,3));

// function myFunction(a, b) {
//     return a * b;
//   }
// let x = myFunction(5, 3);
// alert(x);

// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
// alert(toCelsius(77));

//local variable
// myFunction();
// function myFunction() {
//   let carName = "Volvo";
//   alert(typeof carName);
// }
// alert(typeof carName);

//outer variable
// let userName = 'John';
// function showMessage() {
//     userName = "Bob"; // (1) changed the outer variable

//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// alert(userName); // John before the function call
// showMessage();
// alert(userName); // Bob, the value was modified by the function

//Arrow Function
// let sum = (a,b) =>{
//     return a+b;
// }
// alert(sum(23,56));

let sum2 = (a,b) => a+b;
console.log(sum2(23,56));
alert(sum2(3,6));

