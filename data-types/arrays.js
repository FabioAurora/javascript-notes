const cars = [
    'Saab',
    'Volvo',
    'BMW'
];

let car = cars[0];// Accessing Array elements
cars[0] = 'Opel';// Changing an Array element

// Arrays use NUMBERS to access its "elements";
// Objects use names to access its "members";

//Array Properties and Methods:
cars.length // returns the number of elements
cars.sort() // Sorts the array
toString() // converts an array to a string of comma separated array values.
join(' * ') // also joins elements into a string but can specify the separator.
pop() // method removes the las element from an array
push() // method adds a new element to an array (at the end).
shift() // method removes the first array element and "shifts" all other elements to a lower index.
unshift() //  method adds a new element to an array (at the beginning), and "unshifts" older elements:
concat() // method creates a new array by merging (concatenating) existing arrays:
        const arr1 = ["Cecilie", "Lone"];
        const arr2 = ["Emil", "Tobias", "Linus"];
        const arr3 = ["Robin", "Morgan"];
        const myChildren = arr1.concat(arr2, arr3);

splice() //method adds new items to an array.
slice() //method slices out a piece of an array.

// Adding Array elements
const fruits = ['Banana', 'Orange', 'Apple'];
fruits.push('Lemon'); // Adds "Lemon" to fruits

// The difference between Arrays and Objects:
  // In JavaScript, arrays use numbered indexes.
  // In JavaScript, objects use named indexes.
