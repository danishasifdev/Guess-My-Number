// 'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 24;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there's no input value
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // When the guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When the guess it too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💹 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You Lost the Game!';
      document.querySelector('body').style.backgroundColor = '#e03131';
    }
  }
  // When the guess it too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💹 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You Lost the Game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
