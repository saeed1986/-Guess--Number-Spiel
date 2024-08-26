'use strict';

// get a given number

let randomNumber = Math.floor(Math.random() * 20) + 1;

function getValue() {
  let input = document.getElementsByClassName('guess')[0];
  let value = input.value;
  console.log('Your number is: ' + value);
  console.log('The exact number is: ' + randomNumber);

  if (value > randomNumber) {
    console.log('too High');
  } else if (value < randomNumber) {
    console.log('too low');
  } else {
    console.log('Good guess');
  }
}
