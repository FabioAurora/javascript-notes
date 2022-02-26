const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`); // Concatenating string using backtick character (``)
});

/* Concatenation using "+" operator */
const greeting = "Hello";
const name = "Fabio";
console.log(greeting + ", " + name); // using "+"operator

console.log(`${greeting} ${name}`); // template literals usually give you more readable code
