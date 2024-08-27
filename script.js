'use strict';

// Three numbers for the game
const selectedNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Begin of the game by clicking on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    // When player wins
  } else if (guess === selectedNumber) {
    document.querySelector('.number').textContent = selectedNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // Update highscore if current score is greater
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != selectedNumber) {
    if (score > 1) {
      if (guess > selectedNumber) {
        document.querySelector('.message').textContent = '📈 Too High!';
      } else if (guess < selectedNumber) {
        // Corrected this line
        document.querySelector('.message').textContent = '📉 Too Low!';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // background color should change
  document.querySelector('body').style.backgroundColor = '#222';
  // Score should be 20
  score = 20;
  document.querySelector('.score').textContent = score;
  // Text: start guessing ...
  document.querySelector('.message').textContent = 'Start guessing ...';
  // ? for guess my number
  document.querySelector('.number').textContent = '?';
  // check field = nothing
  document.querySelector('.guess').value = '';
});
