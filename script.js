'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const scoreUpdate = function (score) {
  document.querySelector('.score').textContent = score;
};
const gameNumber = function (numb) {
  document.querySelector('.number').textContent = numb;
};
const styleNumber = function (number) {
  document.querySelector('.number').style.width = number;
};
const bodyColor = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};

//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreUpdate(score);
  gameNumber('?');
  document.querySelector('.guess').value = '';

  bodyColor('#222');

  styleNumber('15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No nnumber!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    gameNumber(secretNumber);

    bodyColor('#60b347');

    styleNumber('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      scoreUpdate(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreUpdate(0);
    }
  }
});
