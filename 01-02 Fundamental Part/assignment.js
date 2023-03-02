// // ****** LECTURE: 1.1 Values and variables

// let country = "Bangladesh";
// let continent = "Asia";
// let population = 170;
// console.log(country, continent, population);

// // ******* LECTURE: 1.2 Data types

// let isIsland = false;
// let language;
// console.log(
//   typeof country,
//   typeof continent,
//   typeof population,
//   typeof isIsland,
//   typeof language
// );

// // let arr = [country, continent, population, isIsland, language];
// // for (i = 0; i < arr.length; i++) {
// //   console.log(typeof arr[i]);
// // }

// // *********** LECTURE: let, const and var

// language = "Bangla";

// // *********** LECTURE: Basic Operators

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);

// let discription =
//   country +
//   " is in " +
//   continent +
//   " and it's " +
//   population +
//   " million people speak " +
//   language;

// console.log(discription);

// // *************************** Coding challange -1 *************************

// // let markMass = 78;
// // let markHeight = 1.69;
// // let johnMass = 92;
// // let johnHeight = 1.95;

// // let markBMI = markMass / (markHeight * markHeight);
// // let johnBMI = johnMass / (johnHeight * johnHeight);

// // let markHigherBMI = markBMI > johnBMI;

// // console.log(markBMI, johnBMI, markHigherBMI);

// // if (markBMI > johnBMI) {
// //   console.log("Mark has higher BMI in comparison with john");
// // } else console.log("John has higher BMI in comparison with mark");

// // let markMass = 95;
// // let markHeight = 1.88;
// // let johnMass = 85;
// // let johnHeight = 1.76;

// // let markBMI = markMass / (markHeight * markHeight);
// // let johnBMI = johnMass / (johnHeight * johnHeight);

// // let markHigherBMI = markBMI > johnBMI;

// // console.log(markBMI, johnBMI, markHigherBMI);

// // Taking decisions

// let age = 23;
// let isAllowdToGo = age >= 21;
// if (isAllowdToGo) {
//   console.log("You can start driving license");
// } else console.log("Not allowed");

// // *******************8 Coding challenge -2 *********************

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);
// let mark = markBMI.toFixed(1);
// let john = johnBMI.toFixed(1);

// let markHigherBMI = mark > john;

// console.log(markBMI, johnBMI, markHigherBMI);

// if (mark > john) {
//   console.log(`Mark's BMI (${mark}) is higher than John's (${john})`);
// } else {
//   console.log(`John's BMI  (${mark}) is higher than Mark's ( ${john})`);
// }

// // *************** Truthy value and falsy value *************************

// let someLetter = "Ujjal is a boy";
// if (someLetter) {
//   console.log("You found your answer");
// } else {
//   console.log("NO, this is not a boolean value");
// }

// // *************** Coding challenge -3 ******************

// let dolphinsArr = [96, 108, 89];
// dolphinsArr = [97, 112, 101];
// dolphinsArr = [97, 112, 101];
// const dolphinsAverage =
//   dolphinsArr.reduce((a, b) => a + b, 0) / dolphinsArr.length;
// console.log(dolphinsAverage);

// let koalasArr = [88, 91, 110];
// koalasArr = [109, 95, 123];
// koalasArr = [109, 95, 106];
// const koalasAverage = koalasArr.reduce((a, b) => a + b, 0) / koalasArr.length;
// console.log(koalasAverage);

// // if (dolphinsAverage > koalasAverage) {
// //   console.log("Dolfins are the winners");
// // } else if (dolphinsAverage === koalasAverage) {
// //   console.log("Match is drawn");
// // } else console.log("Koalas are winners");

// if (
//   dolphinsAverage > koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log("Dolfins are the winners");
// } else if (
//   dolphinsAverage === koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log("Match is drawn");
// } else if (
//   koalasAverage > dolphinsAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log("Koalas are winner");
// } else {
//   console.log("No one wins the trophy");
// }

// // switch statement
// // small challange || implementing wiht if else instead of switch statement
// let day = "Friday";

// if (day === "saturday") {
//   console.log(
//     "This is the time to learn English phrases and explore new things"
//   );
// } else if (day === "Sunday") {
//   console.log("It's time to teach Tamanna English ");
// } else if (day === "Monday") {
//   console.log("It's time to teach Sabiha English ");
// } else if (day === "Tuesday" || day === "Wednesday") {
//   console.log("It's time to teach myself English ");
// } else if (day === "Thursday") {
//   console.log("It's time to teach Tamnna English ");
// } else if (day === "Friday") {
//   console.log("It's time to go to mosque ");
// } else console.log("Your value is not a day");

// // *********** Coding challenge -4 ****************

// //  fist I will solve it by if else statements

// // let bill = 275;
// // bill = 40;
// // bill = 430;
// // let tip;

// // if (bill <= 50 && bill >= 300) {
// //   tip = (bill * 15) / 100;
// // } else {
// //   tip = (bill * 20) / 100;
// // }
// // let total = bill + tip;
// // console.log(
// //   `The bill was ${bill} The tip was ${tip} and the total value ${total}`
// // );

// // solved with ternary operator

// // let bill = 275;
// // bill = 40;
// // bill = 430;
// // let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
// // let total = bill + tip;
// // console.log(
// //   `The bill was ${bill} The tip was ${tip} and the total value ${total}`
// // );

// // // completed 4 coding challenge and practice many more
