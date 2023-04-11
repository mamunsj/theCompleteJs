'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// const getCountry = function (data, className = '') {
//   // const currencyCode = Object.keys(data.currencies)[0];
//   // const currencyName = data.currencies[currencyCode].name;

//   // const languageCode = Object.keys(data.languages)[0];
//   // const languageName = data.languages[languageCode];

//   // shortest way
//   console.log(data);
//   // Object.keys() is a built-in JavaScript method that returns an array of a given object's own property names. When you use Object.keys() on an object, it returns an array of strings representing the object's property names.

//   const currencyName = data.currencies[Object.keys(data.currencies)[0]].name;
//   const languageName = data.languages[Object.keys(data.languages)[0]];

//   // same as below
//   //  const languageName = data.languages[Object.keys(data.languages)];

//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languageName}</p>
//           <p class="country__row"><span>💰</span>${currencyName}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //Ajax call 1;
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     getCountry(data);

//     // Get Neighbour Country 2
//     const [neighbour] = data.borders;
//     // console.log(neighbour);
//     if (!neighbour) return;

//     // Ajax call 2;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       getCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('brazil');
// getCountryAndNeighbour('Iran');
// getCountryAndNeighbour('bharat');
// getCountryAndNeighbour('Pakistan');
// getCountryAndNeighbour('Nepal');
// getCountryAndNeighbour('bhutan');

// let result = fetch('https://restcountries.com/v3.1/name/Bangladesh');
// result
//   .then(function (res) {
//     return res.json();
//   })
//   .then(data => console.log(data));

// let result = fetch('https://restcountries.com/v3.1/name/Bangladesh');
// result
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     console.log(data[0].currencies);
//     const currencyName =
//       data[0].currencies[Object.keys(data[0].currencies)].name;
//     // const currency = data[0].currencies;
//     // const cur = Object.keys(currency)[0];

//     console.log(currencyName);
//   });

// const getCountry = function (data, className = '') {
//   console.log(data);
//   const currencyName = data.currencies[Object.keys(data.currencies)[0]].name;
//   const languageName = data.languages[Object.keys(data.languages)[0]];

//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languageName}</p>
//           <p class="country__row"><span>💰</span>${currencyName}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const getError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country One;
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       getCountry(data[0]);

//       const neighbour = data[0].borders[0]; // if we don't use bracket notation it wil work if there is only one border, if more than one, it it'll send us error; that's y we use index[0]
//       console.log(neighbour);
//       if (!neighbour) throw new Error('No neighbour found');

//       // country two;
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(dataNeighbour => {
//       getCountry(dataNeighbour[0], 'neighbour');
//     })
//     .catch(err => {
//       console.log(err);
//       getError(`Something went wrong 🚹 , ${err.message} Try again`);
//     })
//     // finally will always run, no matter the promises is resolved or rejected;
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   setTimeout(() => {
//     getCountryData('malaysia');
//   }, 40);
// });

// const lottery = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setInterval(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You won 🍷 ');
//     } else {
//       reject('You lost 💩 ');
//     }
//   }, 1000);
// });

// lottery.then(res => console.log(res)).catch(err => console.log(err));

// _______________________________ 2nd attempt;

// const getPosition = function () {
//   return new Promise(function (res, rej) {
//     navigator.geolocation.getCurrentPosition(res, rej);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const getCountry = function (data, className = '') {
//   console.log(data);
//   const currencyName = data.currencies[Object.keys(data.currencies)[0]].name;
//   const languageName = data.languages[Object.keys(data.languages)[0]];

//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languageName}</p>
//           <p class="country__row"><span>💰</span>${currencyName}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   // Country One;
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       getCountry(data[0]);

//       const neighbour = data[0].borders[0]; // if we don't use bracket notation it wil work if there is only one border, if more than one, it it'll send us error; that's y we use index[0]
//       console.log(neighbour);
//       if (!neighbour) throw new Error('No neighbour found');

//       // country two;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(dataNeighbour => {
//       console.log(dataNeighbour[0].capital);
//       getCountry(dataNeighbour[0], 'neighbour');
//     })
//     .catch(err => {
//       console.log(`Something went wrong 🚹 , ${err.message} Try again`);
//     })
//     // finally will always run, no matter the promises is resolved or rejected;
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       console.log(pos.coords);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           ` You are so fast that's why this error happens (${response.status})`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(err.message));
// };
// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// btn.addEventListener('click', whereAmI);
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved');
//   }, 2000);
// });

// console.log(myPromise);

// const getCountry = function (data, className = '') {
//   const currencyName = data.currencies[Object.keys(data.currencies)[0]].name;
//   const languageName = data.languages[Object.keys(data.languages)[0]];

//   const html = `
//       <article class="country ${className}">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${languageName}</p>
//           <p class="country__row"><span>💰</span>${currencyName}</p>
//         </div>
//       </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const geoPos = await getPosition();
//     const { latitude: lat, longitude: lng } = geoPos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem with getting location data');
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     console.log(res);
//     if (!res.ok) throw new Error('Problem with getting country data');
//     const data = await res.json();
//     console.log(data);
//     getCountry(data[0]);

//     return `You are ${dataGeo.city} in ${dataGeo.country}`;
//   } catch (err) {
//     console.log(`${err} 🔥 🍟   `);
//     getError(`🧬 ${err.message}`);
//     throw err;
//   }
// };

// (async function () {
//   whereAmI();
//   .then(city => console.log(city))
//   .catch(err => console.log(err.message))
//   .finally(() => console.log('finished getting location'));
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.log(err.message);
//   }
//   console.log('finished getting location');
// })();

function log(val) {
  return console.log(val);
}

log(40);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(
//       data.map(d => {
//         const capital = d[0].capital;
//         return Array.isArray(capital) ? capital[0] : capital;
//         // or return d[0].capital[0]
//       })
//     );

//     console.log(
//       data.map(dataCountry => {
//         const avv = dataCountry[0].altSpellings;
//         // return dataCountry[0].altSpellings[0];
//         return Array.isArray(avv)
//           ? avv[2] == undefined
//             ? 'No value Provided'
//             : avv[2]
//           : '40';
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('usa', 'canada', 'spain');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/japan`),
//     getJSON(`https://restcountries.com/v3.1/name/spain`),
//   ]);
//   // it will race, the fastest result will be printed;
//   console.log(res[0]);
// })();
