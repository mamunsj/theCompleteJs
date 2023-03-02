// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// let num = [4, 6, 8];
// let [n1, n2, n3] = num;
// console.log(n1, n2, n3);
// let [n4, , n5] = num;
// console.log(n4, n5);

// let [first, , , second] = restaurant.categories;
// console.log(first, second);

// // switching variable
// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// // Destructuring array;
// // [first, second] = [second, first];
// // console.log(first, second);

// console.log(restaurant.order(3, 2));

// // Receive 2 return values from a function;
// let [a, b] = restaurant.order(3, 2);
// console.log(a, b);

// //nested arrays;

// let arr = [2, 5, 24, [62, 5]];
// let [x, , y, [xx, yy]] = arr;
// console.log(x, y, xx, yy);

// // Default value

// const [aa = 1, bb = 1, cc = 1] = [11, 15];
// console.log(aa, bb, cc);

// // ******************** Destructuring object***********************

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: task,
// } = restaurant;
// console.log(restaurantName, openingHours, categories);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// let number = 20;
// let number2 = 23;
// let obj = {
//   number: 30,
//   aaaa: 32,
//   number2: 21,
// };

// console.log(obj);

// ({ number, number2 } = obj);
// console.log(number, number2);

// // ******* Spread Operator *******

// // It does not create a new array it just takes all elements from the array, and we can use that only in a place where we would write all values separated by commas;

// let newMenu = [...restaurant.mainMenu, 'Shawarma', 'Burger', 'Kabab'];
// let mainMenu = restaurant.mainMenu;
// console.log([...newMenu, ...mainMenu]);

// num = [8, 9, 10, 11, 12];
// let newNumber = [...num, ...[13, 14, 15, 16]];
// console.log(newNumber);

// const mainCopy = { ...restaurant };
// const newCopy = {
//   foundationIn: 2010,
//   ...restaurant,
//   founder: 'Mamun Ujjal',
// };

// newCopy.name = 'Ujjal Corner';

// console.log(mainCopy, newCopy);

// // Rest parameters

// // it is similar to spread operator, but
// // the diff is spread operator is take place in after '=' operator while Rest param are take place before the '=' operator; and it has to be the last value of an arr/obj and most importantly there has to be only one rest in any destrucuring assignment;

// // spread opertors are used on these where we would otherways write values seperated by a comma, rest parameters are used there where we would write varibles name seperated by comma; **************************

// // ex - Spread
// // let newMenu = [...restaurant.mainMenu, 'Shawarma', 'Burger', 'Kabab'];

// // ex - Rest because it is used before '=' operator;
// // let [a,b,c,...others] = [1,2,3,4,5,6,7,9]

// //Obj

// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays.fri.open);
// for (let i = 0; i < weekdays.length; i++) {
//   console.log(weekdays[i]);
// }
// console.log(weekdays.fri.length);

// function add(ing1, ...others) {
//   //As a rest para
//   console.log(ing1, others);
// }

// add(restaurant.mainMenu);
// let menu33 = [...restaurant.mainMenu];

// add(...menu33);
// add('Burger', ...[...restaurant.mainMenu]); // As a spread operator;

// // Short cirtuiting/ Short circuit evaluation;

// // '||' if any truthy value is found in elements then return it, if it is in first place then it will return first one;

// // '&&' if all value are true then it is true and return the last one, if any one of them is false then retuns false and false numbered element;

// console.log(null || undefined);
// console.log(undefined || null);
// console.log(0 || 10); // it will return 10 becasue 0 is a falsy value;

// console.log('Jesmin' && 'Sultana');
// console.log(0 && 10); // it will return 0 becasue 0 is a falsy value

// // nullish coalescing operator '??'

// // Nullish means null and undefined (Not 0 and "");

// console.log(0 ?? 10); // it will return 0 cz it is a value, although it's falsy;
// console.log('' ?? 10); // it will return '' cz it is an empty value, although it's falsy;

// // Logical Assignment Operator

// const team1 = {
//   name: 'Bandhan',
//   owner: 'Ujjal',
// };

// const team2 = {
//   player: '',
//   owner: 'Ujjal',
// };

// // team1.name = team1.name || "Mother's love";
// // team2.name = team2.name || "Mother's love";

// team1.name ||= "Mother's love";
// team2.name ||= "Mother's love";
// console.log(team1, team2);

// // team1.player = team1.player && 30;
// // team2.player = team2.player && 30;

// team1.player &&= 10;
// team2.player &&= 10;

// console.log(team1, team2);

// // team1.player = team1.player ?? 30;
// // team2.player = team2.player ?? 30;

// team1.player ??= 30;
// team2.player ??= 30;
// console.log(team1, team2);

// // Optional chaining ****************

// let days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
// for (let day of days) {
//   // const open = restaurant.openingHours[day]?.open || 'closed'; // Syntext of optional chaining;
//   // const open = restaurant.openingHours[day]?.open; // if the logic is false then immediately return undefind
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; // check it is nullish or not
//   console.log(`On ${day} we open at ${open}`);
// }

// Sets

// let girlSplt = girl.split('Je');
// console.log(girlSplt);
// let both = boy.concat(girl);
// console.log(sl);

// console.log(boy.indexOf('a'), boy.lastIndexOf('a'));
// console.log(boy.length, boy.concat(girl));
// console.log(both, both.length);
// const bothSliced = both.slice(0, 18);
// console.log(bothSliced);
// const boyC = boy.charAt(0, 5);
// console.log(boyC);
// for (let i = 0; i < boy.length; i++) {
//   console.log(boy[i]);
// }

// const lastIn = both.lastIndexOf('n');
// console.log(lastIn);

// const bothSliced = both.slice(0, both.lastIndexOf('   '));
// console.log(bothSliced.split('Ujjal Jesmin'));
// console.log(bothSliced);
// const bothSpl = bothSliced.split('Ujjal Jesmin');
// console.log(bothSpl);

// Fix capitalization in name

// let name = 'uJJal';
// let nameLower = name.toLowerCase();
// let correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
// console.log(correctName);

// // Comparing

// let log = 'mamunsj2616@gmail.com';
// let userLog = 'MamunSj2616@gmail.com';
// let normalLog = userLog.toLowerCase();
// console.log(normalLog === log);

// // Replacing
// let taka = '50.54tk';
// let ukPound = taka.replace('tk', 'p').replace('.', ',');
// console.log(taka, ukPound);

// let announcement =
//   "All men should come to the Chairman's Office, I said all men";
// console.log(announcement.replace('men', 'Students')); // replace the first match;
// console.log(announcement.replaceAll('men', 'Students'));
// console.log(announcement.replace(/men/g, 'Students')); // Either replaceAll or regExp to get all match;

// // Boolean
// let biman = 'Ban 7152';
// console.log(biman.includes(71));
// console.log(biman.startsWith('Ban'));

// function checkForExam(val) {
//   let passed = val.toLowerCase();
//   if (
//     passed.includes('seventy') ||
//     passed.includes('eighty') ||
//     passed.includes('hundred')
//   ) {
//     console.log('You are allowed to sit for the upcomming exam');
//   } else console.log('You are not allowed to sit for the exam');
// }
// checkForExam('I had seventy percent attendance');
// checkForExam('Nuru had eighty percent attendance');
// checkForExam('Rupon had sixty percent attendance');

// // split

// let msg = 'are my favorite person Mr. Abdullah Ali';
// console.log(msg.split(' '));
// const [a, b, c, d, e, f, g] = msg.split(' ');

// const newName = ['You', a, b, c, d, e, f.toUpperCase(), g].join('____');
// console.log(newName);

// if (newName.includes('ABDULLAH')) console.log('Yess you are my fav person.');
// else console.log('Abdur Rahman is my fav person');
// let math = 5004;
// math = (5004).toString();
// console.log(math);
// if (typeof math === 'string') console.log(`Hello ${math}`);

// msg = 'Today we went to dhaka court for a meeting with seniors';

// function capitalizeWords(val) {
//   const splitedWords = val.split(' ');
//   const capName = [];
//   for (const word of splitedWords) {
//     // capName.push(word[0].toUpperCase() + word.slice(1));
//     capName.push(word.replace(word[0], word[0].toUpperCase()));
//     console.log(capName);
//   }
//   console.log(capName.join(' '));
// }
// capitalizeWords(msg);

// // padding

// msg = 'my pass is 34';
// console.log(msg.padStart(20, '+').padEnd(31, '$'));

// const hideCreditNum = function (num) {
//   // const str = num.toString();
//   const str = num + '';
//   const lastFour = str.slice(-4);
//   const pass = lastFour.padStart(str.length, '*');
//   console.log(pass);
// };
// hideCreditNum(34434843);
// hideCreditNum(34419723);
// hideCreditNum(34014010);

// // Repeat

// msg = 'I love Muhammad (S.W) ';
// console.log(msg.repeat(10));

// function hurryUpFromWashRoom(n) {
//   console.log(`Hurry up there are ${n} people in line ${'👱'.repeat(n)} `);
// }
// hurryUpFromWashRoom(4);
// hurryUpFromWashRoom(5);
// hurryUpFromWashRoom(11);

// console.log('Yee 😎 '.repeat(3));

// const r = 'Yee 😎 '.repeat(3);
// console.log(r.split(' ').join(' '));
// console.log(r.split(' ').join('').padStart(25, '*'));

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const callSliced = val => val.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  //   console.log(flight);
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '😠' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${callSliced(from)} to ${callSliced(to)} (${time.replaceAll(
    ':',
    'h'
  )})`.padStart(45, '*');
  // .padEnd(65, ' 💌');
  console.log(output);
}
