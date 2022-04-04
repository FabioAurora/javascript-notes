"use strict";

//Looping through a collection (Array, Set, Map).
// The for...of loop.

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// In this example, for (const cat of cats) says:
// Given the collection cats, get the first item in the collection.
// Assign it to the variable cat and then run the code between the curly brackets {}.
// Get the next item, and repeat (2) until you've reached the end of the collection.

// map() and filter()

// You can use map() to do something to each item in a collection and create a new
// collection containing the changed items:
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats); // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// You can use filter() to test each item in a collection, and create a new collection
// containing only items that match:
// Testing if the item starts with the letter "L"
function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat); // the result is an Array containing only cats whose
// names start with "L".

console.log(filtered); // [ "Leopard", "Lion" ]

//NOTE NOTE NOTE NOTE NOTE NOTE NOTE:
// map() and filter() are both often used with function expressions
// rewriting the example above tom be more compact:

const filteredCats = cats.filter((cat) => cat.startsWith("T"));

console.log(filteredCats);
