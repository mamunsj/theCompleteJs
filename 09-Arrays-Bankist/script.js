'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Started on 01/03/23

const createUserName = function (acounts) {
  acounts.forEach(acc => {
    acc.uesrName = acc.owner
      .toLowerCase()
      .split(' ') // splits a string into an array of substrings and returns it;
      .map(name => name[0]) // as split returned array, Therefor, Array.map work, and it returns a new arrays;
      .join(''); // creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
    console.log(acc);
  });
};
createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display Balance
  calDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    // This will sit on after movements type =>
    // const dayCount = Math.trunc(Math.random() * 10) + 1;
    //  <div class="movements__date"> ${dayCount} day ago</div>;

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const hmtl = `
        <div class="movements__row" >
        <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
        <div class="movements__value"> ${mov}€ </div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', hmtl);
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
  labelBalance.textContent = `${balance}€ `;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => (acc += cur), 0);
  labelSumIn.textContent = `${income}€ `;

  const deposit = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => (acc += cur), 0);
  labelSumOut.textContent = `${Math.abs(deposit)}€ `;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(interest => (interest * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, cur) => (acc += cur), 0);
  console.log(interest);
  labelSumInterest.textContent = `${interest}€ `;
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.uesrName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log(currentAccount);
    // Display UI and Message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur() && inputTransferTo.blur();
    // Updating the UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // => amount /10
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    console.log(amount, currentAccount.movements);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.uesrName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.uesrName === currentAccount.uesrName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
