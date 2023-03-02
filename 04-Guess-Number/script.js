'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector('.number');
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
let ChangeAbleScore = document.querySelector('.score');

dispatchEvent;
const click = document.querySelector('.check');
click.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //when there is no value;
    displayMessage('No value');
    // when the player wins;
  } else if (guess === secretNumber) {
    displayMessage('Correct Number, You won!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the number is high;
    // DRY Code -------------------
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      ChangeAbleScore.textContent = score;
    } else {
      displayMessage('You lost the game');
      ChangeAbleScore.textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       message.textContent = 'Too high';
  //       score--;
  //       ChangeAbleScore.textContent = score;
  //     } else {
  //       message.textContent = 'You lost the game';
  //       ChangeAbleScore.textContent = 0;
  //     }
  //     // when the number is low;
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       message.textContent = 'Too low';
  //       score--;
  //       ChangeAbleScore.textContent = score;
  //     } else {
  //       message.textContent = 'You lost the game';
  //       ChangeAbleScore.textContent = 0;
  //     }
  //   }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  ChangeAbleScore.textContent = score;
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
