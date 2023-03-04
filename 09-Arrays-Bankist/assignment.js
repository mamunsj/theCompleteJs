/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const shallowCopyJulia = dogsJulia.slice();
//   shallowCopyJulia.splice(0, 1);
//   shallowCopyJulia.splice(-2);
//   const arrDogs = shallowCopyJulia.concat(dogsKate);

//   console.log(arrDogs);
//   arrDogs.forEach((dog, i) => {
//     if (dog < 3) {
//       console.log(`Dog number ${i + 1} is still a puppy 🐈🐶.`);
//     } else
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [3, 5, 2, 12, 7]);
// console.log('\n --------------2nd Data----------------- \n ');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge -2

// const calcAverageHumanAge = function (ages) {
//   // const humnaAge = ages.map(age => {
//   //   if (age <= 2) return 2 * age;
//   //   else return 16 + age * 4;
//   // });
//   // Another way =================>>>>>>>>>>>>>
//   const humnaAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adultDog = humnaAge.filter(age => age >= 18);
//   const average =
//     adultDog.reduce((acc, cur) => (acc += cur), 0) / adultDog.length;

//   // Another way// => by Jonas:
//   // const average = adultDog.reduce((acc, cur, i, arr) => (acc += cur/arr.length), 0);

//   // console.log(average);
//   return average;
// };
// const avgOne = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avgTwo = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avgOne, avgTwo);

// const calcAverageHumanAge = ages => {
//   const humnaAge = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18);
//   const avg = humnaAge.reduce((acc, cur) => (acc += cur), 0) / humnaAge.length;
//   return avg;
// };
// const avgOne = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avgTwo = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avgOne, avgTwo);

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avgOne = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avgTwo = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avgOne, avgTwo);

// let sum = [80, 40, 56, 36, 40, 32];
// let sum2 = [36, 32, 76, 48, 28];
// console.log(sum2.reduce((acc, crr) => acc + crr) / sum2.length);
// console.log(sum.reduce((acc, crr) => acc + crr) / sum.length);

const addTwoNum = function () {
  console.log(10 + 20);
};
addTwoNum();
