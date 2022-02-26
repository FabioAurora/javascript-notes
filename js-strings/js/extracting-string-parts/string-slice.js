// slice() extracts a part of a string and returns the extracted part in a new string.
// slice(start, end)
// Example
const slicer = document.querySelector(".slicer");

let str = "Apple, Banana, Kiwi, Orange, Grapes";
let part = str.slice(14, 19);

slicer.textContent = part;
