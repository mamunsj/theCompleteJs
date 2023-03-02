'use strict';

// Default Parameters

// const addNum = function (n1, n2, n3) {
// //  old way --ES5
//   n1 = n1 || 10;
//   n2 = n2 || 20;
//   n3 = n3 || 50;
//   console.log(n1, n2, n3);
// };
// addNum(40);

// updated ways --ES6
// const addNum = function (n1 = 0, n2 = 4 * n1, n3 = 4 * n2) {
//   console.log(n1, n2, n3);
// };
// addNum(4);

// How passing argument works: Reffrence vs value

// const id = '10DEV'; // primitive val
// const obj = {
//   name: 'Mamun Ujjal',
//   credentialNumber: 2034482349,
//   age: 23,
// };

// const callPerson = function (i, perObj) {
//   i = '#32034'; // it will not change the actual id number as it is Primitive value type;
//   console.log(id); // Expected output: 10DEV;
//   perObj.age = 24; // it will change the acutal objs age as it is refference type
//   console.log(i, perObj);
// };
// callPerson(id, obj);
// console.log(id, obj.age);

// First class function => can receive a value, can be used as a value
// higher order function means => A function can be used as an argument of another function, or a function can receive another function as an argument of the function the funciton that used as argument is called callback function and the function that receive a callback function is called higher order function

// these are lower order or function; [though not officially🤣]
// const oneWord = function (val) {
//   return val.replace(/ /g, '').toLowerCase();
// };

// const oneWordUpper = function (val) {
//   const [a, ...b] = val.split(' ');
//   return [a.toUpperCase(), ...b].join(' ');
// };

// Abstraction means => hide details of some code implementation; we don't care about the details;

// higher order function
// const trasnformer = function (val, cb) {
//   console.log('Original val: ', val);
//   console.log(`Transformed val: ${cb(val)}`);
//   console.log(`Transformed by ${cb.name}`);
// };

// trasnformer('Someone is very funny when he speaks', oneWord); // callback func;
// trasnformer('Someone is very funny when he speaks', oneWordUpper);

// challenge

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greetingHello = greet('Hello');
// greetingHello('Ujjal');

// greet('I love')('Mother');

// const bimanBd = {
//   airLine: 'Biman Bangaldesh Airlines',
//   aitaCode: 'BBC', //The International Air Transport Association's (IATA) Location Identifier is a unique 3-letter code (also commonly known as IATA code)
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.aitaCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.aitaCode}${flightNum}`, name });
//   },
// };

// bimanBd.book(249, 'Sabiha Jesmin');
// bimanBd.book(229, 'Yesmin Begum');
// bimanBd.book(224, 'Mahida Begum');

// let booking = bimanBd.book;

// const airAsia = {
//   airLine: 'Air Asia Airlines',
//   aitaCode: 'AAA',
//   bookings: [],
// };

// // Does NOT work
// // booking(airAsia, 20, 'Ujjal'); coz 'this' returns undefined in regular func, and this is a regular function, though it is copied from bimanBd;

// booking.call(airAsia, 13, 'Mamun Ujjal'); // airAsia replaces this keyword; first we have to set a value for this keyword as I wrote here; function method returns new function;
// booking.call(airAsia, 33, 'Ujjal R Ujjal');

// const usBangla = {
//   airLine: 'US Bangla Airlines',
//   aitaCode: 'UBA',
//   bookings: [],
// };
// booking.call(usBangla, 28, 'Tamanna Akhter ');
// booking.call(usBangla, 29, 'Taslima Akhter ');

// console.log(bimanBd);
// console.log(airAsia);
// console.log(usBangla);

// let sayHello = {
//   hello: 'hell',
//   sayHi: function (para) {
//     console.log(this);
//   },
// };
// sayHello.sayHi(490);

// bind function

// const person = {
//   name: 'Someone ',
//   age: 23,
//   dept: 'Arabic Language and Literature',
//   intro: function (n, a) {
//     console.log(
//       `${n} studies at the dept of ${this.dept}. He is ${a} years old`
//     );
//   },
// };
// const student = person.intro;
// const student2 = {
//   dept: 'English ',
// };
// const student3 = {
//   dept: 'Math ',
// };

// IIFE Immidiately invoked function expression

// (function () {
//   console.log('This is IIFE function example');
// })();

// (() => console.log('This is another one'))(); // arrow function

// {
//   let num = 40;

// Input: (l1 = [2, 4, 3]), (l2 = [5, 6, 4]);
// Output: [7, 0, 8];
// // Explanation: 342 + 465 = 807.

// // Example 2:

// Input: (l1 = [0]), (l2 = [0]);
// Output: [0];
//   console.log(num);
// }

const li = [2, 4, 3];
const l2 = [5, 6, 4];

var addTwoNumbers = function (l1, l2) {
  let num1 = Number(l1.reverse().join(''));
  let num2 = Number(l2.reverse().join(''));
  let ans = (num1 + num2).toString().split('');
  // ans.slice(0, 2);
  // l2.reverse().join('');
  console.log(ans);
};
addTwoNumbers(li, l2);
