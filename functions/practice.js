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
