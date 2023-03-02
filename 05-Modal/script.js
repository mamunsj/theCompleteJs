'use strict';

const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');

const showModalFunction = function () {
  hidden.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModalFunction = function () {
  hidden.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', showModalFunction);
}

closeModal.addEventListener('click', hideModalFunction);
overlay.addEventListener('click', hideModalFunction);

document.addEventListener('keydown', function (event) {
  //   console.log(event);
  if (event.key === 'Escape' && !hidden.classList.contains('hidden')) {
    hideModalFunction();
    // after pressing Escape key, if there is a classname called 'hidden' then remove it or if there is not, then make it.
    // hidden.classList.toggle('hidden');
  }
});
