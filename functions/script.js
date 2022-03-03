// Built-in browser functions
// used my manipulating a text string:
const myText = "I am a string";
const newString = myText.replace("string", "cheese");
console.log(newString);
// The replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

// by manipulating an array:
const myArray = ["I", "love", "my", "life"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

// by generating a random number:
const myNumber = Math.random();
/* ****************************************************************** */

// FUNCTIONS VS METHODS:
// Methods are functions that are part of objects;
// example with functions and methods:
function random(number) {
  // function
  return Math.floor(Math.random() * number); //method
}

function draw() {
  // function
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // method
  for (let i = 0; i < 100; i++) {
    ctx.beginPath(); // method
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI); // arc is a method, random is a function.
    ctx.fill();
  }
}
/* *************************************************************************** */

//Invoking Functions
function myFunction() {
  //alert('hello');
}

myFunction(); // invoking
// calls the function once

/* ******************************************************************************** */

//Function PARAMETERS
//Parameters are sometimes called arguments, properties or even attributes.
//As an example, the browser's built-in Math.random() function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

const meuNumero = Math.random();

//The browser's built-in string replace() function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

const meuTexto = "Eu sou uma string";
const novaString = meuTexto.replace("string", "banana");
// ----------------------------------------------
// OPTIONAL PARAMETERS:
//Sometimes parameters are optional
const meuArray = ["Eu", "gosto", "de", "chocolate", "branco"];
const fizUmaString = meuArray.join(" "); // have a prarameter
console.log(fizUmaString);
// returns 'Eu gosto de chocolate branco'

const madeAnotherString = meuArray.join(); // do not have a parameter
console.log(madeAnotherString);
// returns 'Eu,gosto,de,chocolate,branco'
//----------------------------------------------------

// DEFAULT PARAMETERS:
//If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value:

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
