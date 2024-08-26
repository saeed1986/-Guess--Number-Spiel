'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct selectedNumber';
// document.querySelector('.selectedNumber').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);

const selectedNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    // When player wins
  } else if (guess === selectedNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = selectedNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When quess is too high
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

    // When quess is too low
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

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing ...';
});
