// Atributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.alt);
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('student', 'Ujjal Mamun');
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('student'));
// console.log(logo.getAttribute('company'));

// console.log(logo.dataset.playerCricket);
// logo.classList.add('man');
// // logo.classList.remove('man');
// console.log(logo);
// logo.classList.toggle('man');

// console.log(logo.classList.contains('man'));
// console.log(logo);
// logo.className = 'Ujjal';
// console.log(logo);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookied for improving our service to the customer <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });
// console.log(message);

// document.documentElement.style.setProperty('--color-primary', '#3ddf');

// Scroll behavior and smooth scroll

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const sec1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e) {
//   // console.log(
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   // const sec1Corr = sec1.getBoundingClientRect();
//   // console.log(sec1Corr);
//   // console.log(window.pageXOffset, window.pageYOffset);

//   // window.scrollTo(
//   //   sec1Corr.left + window.pageXOffset,
//   //   sec1Corr.top + window.pageYOffset
//   // );
//   // window.scrollTo({
//   //   left: sec1Corr.left + window.pageXOffset,
//   //   top: sec1Corr.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // Simillar to >= ^^
//   sec1.scrollIntoView({ behavior: 'smooth' });
// });

// More ways of event listener/ and deleting listeners
// const h1 = document.querySelector('h1');
// h1.onclick = function () {
//   alert('This is a header tag');
// };

// const h1 = document.querySelector('h1');
// // h1.oncopy = function () {
// //   alert('This is a header tag');
// // };

// const funct = function () {
//   alert('This is a header');
// };
// h1.addEventListener('click', funct);

// setTimeout(() => h1.removeEventListener('click', funct), 4000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const time1 = setInterval(() => {
//   console.log(randomInt(0, 255));
// }, 1000);
// clearInterval(time1);

// const randomColor = () =>
//   (document.body.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
//     0,
//     255
//   )},${randomInt(0, 255)})`);

// const time = setInterval(() => {
//   randomColor();
// }, 259);

// clearInterval(time);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// // Generate a random gradient color
// function getRandomGradientColor() {
//   // Define an array of colors
//   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

//   // Choose two random colors from the array
//   const color1 = colors[Math.floor(Math.random() * colors.length)];
//   const color2 = colors[Math.floor(Math.random() * colors.length)];

//   // Create the gradient string
//   const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

//   // Return the gradient string
//   return gradient;
// }

// Example usage
// const gradient = getRandomGradientColor();
// document.body.style.background = gradient;

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function () {
//   this.style.backgroundImage = getRandomGradientColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function () {
//   this.style.backgroundImage = getRandomGradientColor();
// });

// document.querySelector('.nav').addEventListener('click', function () {
//   this.style.backgroundImage = getRandomGradientColor();
// });

// console.log(getRandomGradientColor());

///////////////////////////////////////////////////

// DOM traversing

// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.parentNode);
// console.log(h1.parentNode.children);
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);

// [...h1.parentElement.children].forEach(function (elem) {
//   console.log(elem);
//   if (elem != h1) {
//     // elem.style.transform = 'scale(.)';
//     // elem.style.background = 'orangered';f
//   }
// });

// Get the navbar
// const nav = document.querySelector('.nav');
// const sec1 = document.getElementById('section--1');

// // Get the offset position of the navbar
// const sticky = sec1.getBoundingClientRect();
// console.log(sec1.offsetTop, window.scrollY);
// console.log(sticky);

// // Add the sticky class to the sec1 when you reach its scroll position. Remove "sticky" when you leave the scroll position
// window.onscroll = function () {
//   if (window.scrollY >= sticky.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// };

// IntersectionObserver API

// const observer = new IntersectionObserver(
//   function (entries, observer) {
//     entries.forEach(entry => console.log(entry));
//   },
//   { root: null, threshold: 0.1 }
// );
// console.log(observer);
// observer.observe(section1);
