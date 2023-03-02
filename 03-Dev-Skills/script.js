// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// What is amplitude?
// পর্যায়ক্রমিক চলকের Amplitude বা বিস্তার হলো একক সময়ে (যেমন সময় বা স্থানিক সময়কাল) তার পরিবর্তনের পরিমাপ।

// - What is temperature amplitude? Answer: difference between highest and lowest temp;

function calTemp(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    // if (typeof currentTemp === 'string') break;
    if (typeof currentTemp === 'string') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
}
// const amplitiude = calTemp([-3, -24, -4, -8, 'string', 21, 15, 18, -5, -12]);
const amplitiude = calTemp([3, 9, 5, 3]);
console.log(amplitiude);

// temperature function will take two array values;

function calTemp2(temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    // if (typeof currentTemp === 'string') break;
    if (typeof currentTemp === 'string') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
}

const amplitude = calTemp2([2, 5, 9], [20, 50, 30, 60]);

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]
*/
// first one

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}°C in ${i + 1} days...`);
  }
}
printForecast([17, 21, 23]);

// second one

function printForecast2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}°C in ${i + 1} days...`);
  }
}
printForecast2([12, 5, -5, 0, 4]);

// final By transforming arrys into strings;

function printForecastFinal(arr) {
  let sum = '';
  for (let i = 0; i < arr.length; i++) {
    sum += `${arr[i]}°C in ${i + 1} days... `;
  }
  return '... ' + sum;
}
const result = printForecastFinal([17, 21, 23]);
console.log(result);

console.log('h3llo');
