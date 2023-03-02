// ************* Part-2 coding challenges start here;

// Coding challenge -5

const calAverage = () => {
  const dolfhinsAverage = (44 + 23 + 71) / 3;
  const kualasAverage = (65 + 54 + 49) / 3;
  const dolfhinsAverage2 = (85 + 54 + 41) / 3;
  const kualasAverage2 = (23 + 34 + 27) / 3;

  function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
      console.log(`"Dolfhins win (${avgDolhins}vs ${avgKoalas})"`);
    } else if (avgKoalas >= 2 * avgDolhins) {
      console.log(`"Kualas win (${avgKoalas}vs ${avgDolhins})"`);
    } else {
      console.log("No team win");
    }
  }
  checkWinner(dolfhinsAverage, kualasAverage);
  checkWinner(dolfhinsAverage2, kualasAverage2);
};

calAverage();

// another way and better way, their solution alike

// const calAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calAverage(23, 44, 71);
// let scoreKoalas = calAverage(65, 54, 49);

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolhins) {
//     console.log(`Kualas win (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No teams win");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calAverage(85, 54, 41);
// scoreKoalas = calAverage(23, 34, 27);ff
// checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge -6 ************

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
}
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`Bills are ${bills}, Tips are ${tips} and the total is ${total}`);

// Coding challenge -7 ****************

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const millarId = {
  fullName: " Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const millarBMI = millarId.calcBMI();
console.log(millarBMI);

const smithId = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const smithBMI = smithId.calcBMI();

if (millarBMI > smithBMI) {
  console.log(
    `${millarId.fullName} 's BMI (${millarBMI}) is higher than ${smithId.fullName}'s (${smithBMI})!`
  );
}

/*
Coding Challenge #7
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1.
First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2.
To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.
Call the function with the 'totals' array
GOOD LUCK 😀

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(tips);
console.log(totals);

function calculteAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
const arr = calculteAverage([40, 20, 100]);
const total = calculteAverage(totals);
console.log(arr);
console.log(total, "total");
console.log(calculteAverage(tips));

// Completed all the coding challenge from part two;
