// The if statement
if (new Date().getHours() < 18) {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  document.getElementById(
    "demo"
  ).textContent = `My son Arthur says it is Good day because the time is ${hours}:${minutes}`;
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.
if (new Date().getHours() < 18) {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  document.getElementById(
    "demo1"
  ).textContent = `My son Arthur says it is Good day because the time is ${hours}:${minutes}`;
} else {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  document.getElementById(
    "demo1"
  ).textContent = `My son Arthur says it is Good Evening because the time is ${hours}:${minutes}`;
}

// The else if Statement
/* if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
} */
if(new Date().getHours() < 10) {
    document.querySelector('.demo2').textContent = 'Good morning!'
}else if (new Date().getHours() < 18) {
    document.querySelector('.demo2').textContent = 'Good day!'
}else
    document.querySelector(".demo2").textContent = "Good evening!";
