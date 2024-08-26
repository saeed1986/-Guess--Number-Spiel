'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct selectedNumber';
// document.querySelector('.selectedNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

const selectedNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = selectedNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  } else if (guess === selectedNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > selectedNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < selectedNumber) {
    if (score > 0) {
      // Changed 'else' to 'else if' with condition
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--; // Corrected message
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤦‍♂️ You lost the game!';
    }
  }
});
