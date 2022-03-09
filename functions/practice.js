// 1----------------------------------
function add7(num) {
  return num + 7;
}

console.log(add7(10));

//2--------------------------

function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 2));

//3---------------------------------------
function capitalize(string) {
  let capLetter = string.slice(0, 1).toUpperCase();
  let restString = string.slice(1).toLowerCase();

  console.log(`${capLetter}${restString}`);
}

capitalize("FABIO");
