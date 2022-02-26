const button = document.querySelector("button");

button.addEventListener("click", () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`); //
});
