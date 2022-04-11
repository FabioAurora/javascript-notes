"use strict";

const para = document.querySelector("#integerOutput");
const number = document.querySelector("#number");
const btn = document.querySelector("#integerBtn");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = number.value;
  number.value = "";
  number.focus();

  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});



let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats = `${myFavoriteCats}and ${cats[i]}.`;
  } else {
    myFavoriteCats = `${myFavoriteCats}${cats[i]}, `;
  }
}
