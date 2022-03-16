//what is a return value?
// It is a value that is returned when a function as been completed.
// some functions don't return any value and they are considered "void" or "undefined".

// e.g:
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made.

//e.g
const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
  return num * num; // return value
}

function cubed(num) {
  return num * num * num; // return value
}

function factorial(num) {
  if (num < 0) return undefined; // return value
  if (num == 0) return 1; // return value
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});
