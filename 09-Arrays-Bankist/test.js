'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////

// Slice Method
// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(0, 3));
// console.log(arr.slice(-4));
// console.log(arr.slice(2, arr.length - 1));

// Shallow copy
// console.log(arr.slice());
// to get the whole value we can use either spread or arr.slice method ;
// console.log(...arr);
// Slice method does not mutate/ change the original array, it returns a new array;

// splice => it mutates the original array, also return the a new array; it takes/deletes provided elems from main arrays and returns it in a new array;
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.splice(0, 1)); // the second value reffers how many elem will be cut;
// console.log(arr);

// Reverse => it reverses the array and mutate the main array
// console.log(arr2.reverse());
// console.log(arr2);

// concat => add to more arrays into one
// console.log(arr.concat(arr2)); // same as cl(...arr, ...arr2)

// join => joins the array with given word and return a new string; does not mutate main array

// console.log(arr.join(',').split(','));
// console.log(arr.join('-'));
// console.log(arr.join('--').split('--'));
// console.log(typeof arr.join(''));

// At => it is a new method, it indentify the position

// console.log(arr2[arr2.length - 2]);
// console.log(arr2.at(-2));
// console.log(arr2.slice(-2, -1)); // all are same;

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${Math.abs(movement)}`);
//   } else console.log(`You withdrew ${Math.abs(movement)}`); // math.abs return negative number into plain number or zero;
// }
// console.log('-----------------------------------');

// movements.forEach(function (mov) {
//   if (mov > 0) {
//     console.log(`You deposited ${Math.abs(mov)}`);
//   } else console.log(`You withdrew ${Math.abs(mov)}`);
// });

// const eurToUsd = 1.5;
// const movementUsd = movements.map(mov => mov * eurToUsd);
// console.log(movementUsd, movements);

// const movementsDescription = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `You deposited ${Math.abs(mov)}`;
//   } else return `You withdrew ${Math.abs(mov)}`; // math.abs return negative number into plain number or zero;
// });
// console.log(movementsDescription);

// const movementsDescription = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });
// console.log(movementsDescription);

// movements.forEach(mov => {
//   const m = mov * 2;
//   console.log(m);
// });

// const nF = accounts.forEach(acc => {
//   console.log(acc);
//   acc.userName = acc.owner;
// });
// console.log(nF); // Will return undefind because forEach does not return anything, it just loop through the elems of the array;

// const newVal = accounts.map(acc => {
//   return (acc.userName = acc.owner);
// });
// console.log(newVal); // It will produce new value;

// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

// const min = movements.reduce((acc, cur) => {
//   if (acc < cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(min);

// Flat and FlatMap method =====>>>>> it accumulates all the nested arrays and returns into one array;

// const arr = [10, 20, [30, 40], 50, [60, 70, 80], 90, 100];
// console.log(arr.flat(2));

// const allMov = accounts.map(acc => acc.movements);
// console.log(allMov.flat());
// console.log(allMov.flat().reduce((acc, curr) => (acc += curr), 0));

// Same as the
// const allMov = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, curr) => (acc += curr), 0);
// console.log(allMov);

// const arr = [1, 2, 3, -40, 50];
// const manip = arr.push(4, 5);
// console.log(arr, manip, arr.sort().reverse()); // [1, 2, 3, 4, 5]

// const arrr = ['apple', 'pineApple', 'orange', 'licchi', 'jackfruits'];
// const str = arrr.slice().sort().join().replaceAll(',', '--');
// console.log(arrr, str);

// Array.sort changes the acutal array, so If we don't want it, we have to make a shallow copy, therefor I use slice Method to make a shallow copy. now it will not change our original array. it works on =>>>>> 'string';

// const num = [20, 40, -389, -401, 50, 210, -230];
// const num2 = [20, 40, 50, 200];
// console.log(
//   num.sort(),
//   num2.sort((a, b) => b - a)
// );
// console.log(num, num2, 'Hello');

// // Fill Method
// const num3 = num
//   .slice()
//   .fill(30, 4, 6)
//   .map(elm => elm + 10)
//   .join(',')
//   .split(',');
// console.log(typeof num3, num);

// // Array.from

// //here array is a function,from is a method, first provide length then mapping elements
// const num4 = Array.from({ length: 50 }, (curr, i) => i + 1)
//   .reverse()
//   .sort()
//   .slice(1, 10);
// console.log(num4);

// // Generating 100 random diceRoll form 1 to 6;
// const randomDiceNumber = Array.from(
//   { length: 100 },
//   // (_, i) => Math.trunc(i * Math.random() * 1) + 1
//   (_, i) => `${i + 1}:${Math.floor(Math.random() * 6) + 1}`
// );
// console.log(randomDiceNumber);

// Working with NoodLists 🤣🤣
// labelBalance.addEventListener('click', function () {
//   const movmentsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replaceAll('€', '')
//   );
//   console.log(movmentsUI);
// });

// Exactly same as before
labelBalance.addEventListener('click', function () {
  const movmentsUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log(movmentsUI.map(el => el.textContent.replaceAll('€', '')));
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.join(' '));
console.log(
  movements
    .join(' ')
    .split(' ')
    .map(el => parseInt(el))
    .reduce((mov, cur) => (cur += mov), 0)
);
console.log(typeof movements.join(' '));

console.log(movements.reduce((mov, cur) => (cur += mov), 0));

// Convert Title;

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exception = [
    'a',
    'an',
    'the',
    'and',
    'to',
    'at',
    'on',
    'in',
    'for',
    'of',
  ];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a title for sure'));
console.log(convertTitleCase('this is another title for sure'));
console.log(convertTitleCase('AND this is an important TITLE FOR SURE'));
