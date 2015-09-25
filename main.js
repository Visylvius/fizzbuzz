var numberCount = 100;
  while (numberCount > 0) {
  numberCount--;
  fizzBuzz(numberCount);
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
