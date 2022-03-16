// parameters are the items listed between the parentheses.
// arguments - when we invoke our faction and pass in a value, that value  is our arguments.
// we are telling our function "please send "argument" to the specified function and,
// use "argument" wherever the "parameter" placeholder is.

// e.g
function favoriteAnimal(animal) {
  // animal is a parameter (place holder)
  console.log(`${animal} is my favorite animal!`); // parameter to be replaced by our argument
}

favoriteAnimal("dog"); // passing "dog" as an argument.

/* ****************************************** */
// Default values :
//if a function is called, but an argument is not provided
// then the corresponding value becomes undefined.
//e.g:
/* function showMessage(from, text) */ // 2 parameters

showMessage("Ann"); // if we only pass 1 argument the the result is "Ann: undefined"
// we can solve this with a default value like so:

function showMessage(from, text = "No text given") {
  console.log(from + ": " + text);
}

// the result this time when we call the function would be
// Ann: No text given.

// this is also possible:
function showMessages(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
/* ********************************************************** */

//Alternative default parameters:
// Sometimes it makes sense to assign default values for parameters not in the function declaration, but at a later stage.
/* function message(text) {
    // ...
  
    if (text === undefined) { // if the parameter is missing
      text = 'empty message';
    }
  
    console.log(text);
  }
  
  message(); // empty message

// e.g:

function showCount(count) {
    console.log(count ?? 'Unknown');
}

showCount(2);
showCount(null);
showCount(); */
