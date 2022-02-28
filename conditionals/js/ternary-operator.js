// ternary operator (?)

// syntax:
// (condition) ? run this code : run this code instead

//example:
/* let greeting = (isBirthday) ? 'happy birthday' : 'Good day'; */

//changing theme exercise:

const select = document.querySelector('#theme');
const html = document.querySelector('html');

function setTheme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.addEventListener('change', () => {
    (select.value === 'black') ? setTheme('black', 'white') : setTheme('white', 'black');
})




let response;
let score = 75;
let machineActive = true;

if(machineActive) {
	// Add your code here
   switch (score) {
     case score >= 70 && score <= 89:
       response = "lol";
       break;
   }
} else {
  response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    