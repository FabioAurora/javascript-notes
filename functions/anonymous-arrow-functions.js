function myFunction() { // named function
    console.log('hello');
}
//--------------------------
function() { // Anonymous function
    console.log('hello');
}
//You'll often see anonymous functions when a function expects to receive another function as a parameter. 
//In this case the function parameter is often passed as an anonymous function.
// This form of creating a function is also known as function expression. 
//Unlike function declaration, function expressions are not hoisted.

//example with named function:
function logKey(event) { // named function
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey); // passing in the named function. that was defined separately.
//--------------------------------
//EXAMPLE with anonymous function:
//Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
textoBox.addEventListener('keydown', function(event) {
    console.log(`You pressed "${event.key}".`);
})

/* *************************************************************** */

// ARROW FUNCTIONS
//If you pass an anonymous function like on the above example, there's an alternative form you can use, 
//called an arrow function. 
//Instead of function(event), you write (event) =>:
exampleBox.addEventListener('keydown', (event) => {
    console.log(`Your pressed "${event.key}".`);
})

//If the function only has one line in the curly brackets, you omit the curly brackets:
//exampleBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

//If the function only takes one parameter, you can also omit the brackets around the parameter:
//exampleBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
//-------------------------------------------------------------------------------
//Finally, if your function needs to return a value, and contains only one line, 
//you can also omit the return statement. In the following example we're using 
//the map() method of Array to double every value in the original array

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);// omitting the return statement
const newDouble = originals.map(function doubleItem(item) {
    return item *  2; // return statement
})

console.log(doubled);// [2, 4, 6]
console.log(newDouble)
//----------------------
