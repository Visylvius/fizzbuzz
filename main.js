var numberCount = prompt('Choose a number');
var stringToNumber = parseInt(numberCount);
  while (1 < stringToNumber) {
  stringToNumber--;
  fizzBuzz(stringToNumber);
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizz buzz');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num);
  }
}
fizzBuzz(stringToNumber);
