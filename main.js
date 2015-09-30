function fizzBuzz(num) {
 num = prompt('choose a number');
 num = Number(num);
  if(isNaN(num)) {
    alert('You must input a number');
    return false;
  }
 for (var i = 1; i <= num; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizz buzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }
 }
}
fizzBuzz();
