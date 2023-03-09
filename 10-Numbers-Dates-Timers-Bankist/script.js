'use strict';

/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-03-02T07:02:02.383Z',
    '2023-03-01T21:11:17.178Z',
    '2023-03-06T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Mamun Ujjal',
  movements: [500, 400, 2547, -590, 100, 200, -550, -340],
  interestRate: 2.5,
  pin: 3333,

  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-03-02T07:02:02.383Z',
    '2023-03-01T21:11:17.178Z',
    '2023-03-06T10:51:36.790Z',
  ],
  currency: 'gbp',
  locale: 'en-UK',
};

const account4 = {
  owner: 'Tareq Monower',
  movements: [500, 400, 2547, -590, 100, 200, -550, -340].reverse(),
  interestRate: 5.5,
  pin: 4444,

  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-03-02T07:02:02.383Z',
    '2023-03-01T21:11:17.178Z',
    '2023-03-06T10:51:36.790Z',
  ],
  currency: 'bdt',
  locale: 'bn-Bd',
};
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Started on 01/03/23

const createUserName = function (acounts) {
  acounts.forEach(acc => {
    acc.uesrName = acc.owner
      .toLowerCase()
      .split(' ') // splits a string into an array of substrings and returns it;
      .map(name => name[0]) // as split returned array, Therefor, Array.map work, and it returns a new arrays;
      .join(''); // creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
    // console.log(acc);
  });
};
createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display Balance
  calDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

const formatCurr = function (val, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(val);
};

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'YesterDay';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    // Display Date
    const displayDate = formatMovementDate(date, acc.locale);
    // format Movement
    const formatMov = formatCurr(mov, acc.locale, acc.currency);
    const hmtl = `
        <div class="movements__row" >
        <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
       <div class="movements__date">${displayDate}</div>
        <div class="movements__value"> ${formatMov} </div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', hmtl);
    // containerMovements.insertAdjacentHTML('beforeend', hmtl);
  });
};

// const calDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => (acc += mov), 0);
//   labelBalance.textContent = `${acc.balance}€ `;
// };

//another way
const calDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => (acc += mov), 0);
  acc.balance = balance;
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => (acc += cur), 0);
  labelSumIn.textContent = formatCurr(income, acc.locale, acc.currency);

  const deposit = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => (acc += cur), 0);
  labelSumOut.textContent = formatCurr(
    Math.abs(deposit),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(interest => (interest * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => (acc += cur), 0);
  console.log(interest);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

///////////////////////////////////////////////////
// Event Handlers
let currentAccount;

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hours = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// const sec = `${now.getSeconds()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${min}:${sec}`;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.uesrName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: '2-digit',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receivedAccount = accounts.find(
    acc => acc.uesrName === inputTransferTo.value
  );
  // console.log(amount, receivedAccount);
  if (
    amount > 0 &&
    receivedAccount &&
    currentAccount.balance > amount &&
    receivedAccount?.uesrName !== currentAccount.uesrName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receivedAccount.movements.push(amount);

    // Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receivedAccount.movementsDates.push(new Date().toISOString());
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur() && inputTransferTo.blur();
    // Updating the UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // => amount /10
      currentAccount.movements.push(amount);

      // Add Load date;
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      console.log(amount, 'before and after: ', currentAccount.movements);
      inputLoanAmount.value = '';
    }, 1500);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.uesrName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.uesrName === currentAccount.uesrName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  // const movs = document.querySelectorAll('.movements__row');
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'red';
    }
    if (i % 4 === 0) row.style.backgroundColor = 'pink';
  });
});
