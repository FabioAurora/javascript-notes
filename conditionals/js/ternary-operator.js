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