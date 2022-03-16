/* Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

// 1----------------------------------
function add7(num) {
  return num + 7;
}

console.log(add7(10));

// 2----------------------------------
function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 2));

// 3-------------------------------------
function capitalize(string) {
  const capLetter = string.slice(0, 1).toUpperCase();
  const lowerLetters = string.slice(1).toLowerCase();
  return `${capLetter}${lowerLetters}`;
}

console.log(capitalize("FABIO"));

// 4------------------------------------------
function lastLetter(string) {
  return string.slice(-1);
}

console.log(lastLetter("abcd"));

// 5---------------------------------------
//The function should ask the question and, depending on
//the user’s answer, call yes() or no():

/* function ask(question, yes, no) {
  if(confirm(question)) {
    yes();
  }else {
    no();
  }
} */

/* ask(
  'Do you agree?',
  () => {alert('You agreed!')},
  () => {alert('You canceled the execution')}
) */

/* let ask = () => confirm('Do you agree?') ? alert('You agreed') : alert('You canceled the execution');

ask() */

// 6------------------------------------------
/* Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

This is the big picture problem we will be solving. It’s pretty simple so we may not need to reword it. But we can always make it clearer by rewording it. */
/* 
// Understanding:
// Write a program that will ask the user to enter an input and will print the numbers into the console from number one to the number the user entered. if the numbers are divisible by 3 print Fizz instead of the number the user entered, for numbers divisible by 5 print Buzz and for number which are multiple of both print FizzBuzz.

// plan:

//- will my program have a user interface?, what will it look like?
//    -the program will use a command line

// - what inputs will the program have? will the user enter the inputs or will I get it somewhere?
//    - the user will enter the input in the command line (prompt)

// - desired output?
//    - The user will enter a number that he wants tom fizzbuzz to, if the number is divisible by 3 with no remainder then print fizz, if the number is divisible by 5 with no remainder print buzz, if the number is divisible by both 3 and 5 with no remainder that print fizzbuzz.

// - Pseudocode:
// when the user inputs a number
// Loop from 1 to the entered number
// if the current number is divisible by 3 with no remainder print "Fizz"
// if the current number is divisible by 5 with no remainder print "Buzz"
//if the current number is divisible by 3 and 5 print "FizzBuzz"

//Divide:
// when the user inputs a number:
const answer = parseInt(prompt('Please enter the number you would like to FizzBuzz to:'));

// Loop from 1 to the entered number:
for (let i = 1; i <= answer; i++) {
  //if the current number is divisible by 3 and 5 print "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {// if the current number is divisible by 3 with no remainder print "Fizz"
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz')
  }else console.log(i)
} */

// 7 -----------------------------------------------

/* const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore =  (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScore) {
  console.log(`Dolphins won the 🏆 with an average score of ${dolphinsScore.toFixed(1)}`);
}else if (koalasScore > dolphinsScore){
  console.log(`Koalas won the 🏆 with an average score of ${koalasScore.toFixed(1)}`);
} else if (dolphinsScore === koalasScore) {
  console.log(`Both win the trophy`)
} */

//bonus 1
/* const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore =  (109 + 95 + 123) / 3;
console.log(`Dolphins(${dolphinsScore.toFixed(1)}) - Koalas(${koalasScore.toFixed(1)})`)

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Dolphins won the 🏆 with an average score of ${dolphinsScore.toFixed(1)}`);
}else if (koalasScore > dolphinsScore && koalasScore >= 100){
  console.log(`Koalas won the 🏆 with an average score of ${koalasScore.toFixed(1)}`);
} else if (dolphinsScore === koalasScore) {
  console.log(`Both win the trophy`)
} */

//BONUS 2

const dolphinsScore = (97 + 112 + 98) / 3;
const koalasScore =  (109 + 95 + 103) / 3;
console.log(`Dolphins(${dolphinsScore.toFixed(1)}) - Koalas(${koalasScore.toFixed(1)})`)

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Dolphins won the 🏆 with an average score of ${dolphinsScore.toFixed(1)}`);
}else if (koalasScore > dolphinsScore && koalasScore >= 100){
  console.log(`Koalas won the 🏆 with an average score of ${koalasScore.toFixed(1)}`);
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
  console.log(`Both win the trophy`)
}else {
  console.log(`No one wins the trophy`)
}