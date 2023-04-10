const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//  Assignment - 1 ---------------------->>

const getCountry = function (data, className = '') {
  console.log(data);
  const currencyName = data.currencies[Object.keys(data.currencies)[0]].name;
  const languageName = data.languages[Object.keys(data.languages)[0]];

  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${languageName}</p>
          <p class="country__row"><span>💰</span>${currencyName}</p>
        </div>
      </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country One;
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      getCountry(data[0]);

      const neighbour = data[0].borders[0]; // if we don't use bracket notation it wil work if there is only one border, if more than one, it it'll send us error; that's y we use index[0]
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found');

      // country two;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(dataNeighbour => {
      console.log(dataNeighbour[0].capital);
      getCountry(dataNeighbour[0], 'neighbour');
    })
    .catch(err => {
      console.log(`Something went wrong 🚹 , ${err.message} Try again`);
    })
    // finally will always run, no matter the promises is resolved or rejected;
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  setTimeout(() => {
    getCountryData('malaysia');
  }, 40);
});

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
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

//  Assignment - 2 ---------------------->>

/*
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution
*/

const wait = function (seconds) {
  return new Promise(function (resovle) {
    setTimeout(resovle, seconds * 1000);
  });
};
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image is not found'));
    });
  });
};

let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 is loaded successfully');
    return wait(2);
  }) // for mainting the chain by not going through the call back hell;
  .then(() => {
    console.log('Image 1 is hidden now');
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 is loaded successfully');
    return wait(2);
  })
  .then(() => {
    console.log('Image 2 is hidden now');
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 is loaded successfully');
    return wait(2);
  })
  .then(() => {
    console.log('Image 3 is hidden now');
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

console.log(myPromise);
