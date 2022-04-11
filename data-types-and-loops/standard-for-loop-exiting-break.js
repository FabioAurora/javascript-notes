"use strict";

/* for (initializer; Condition; final-expression) {
    // code to run
} */

// calculating squares;
/* const results = document.querySelector('#results');

function calculate() {
    for(let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += '\n...finished';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');

// You can use a for loop to iterate though a collection, instead of a for..of loop:

// for..of example: (best way)
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

// same code with a for loop: (not recomended for collections)
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
} */

//********************************************* */

// for..of
const gatos = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

/* for (const gato of gatos) {
  myFavoriteCats = `${myFavoriteCats}${gato}`;
} */

//console.log(myFavoriteCats);

// for loop:

for (let i = 0; i < gatos.length; i++) {
  if (i === gatos.length - 1) {
    myFavoriteCats = `${myFavoriteCats} and ${gatos[i]}`;
  } else {
    myFavoriteCats = `${myFavoriteCats}${gatos[i]}, `;
  }
}
console.log(myFavoriteCats);

/* -----------****------------------ */

// create a list of contacts
//reset the input value to empty
//focus on the input after that
//reset the paragraph to empty
// loop thru the contact list


const contacts = [
  "Fabio:0768456789",
  "Tamires:071128364",
  "Arthur:0767201506",
  "Joao:44+2983746636",
  "Marco:+18734467644",
  "Tiago:295642072",
];

const para = document.querySelector("#list");
const input = document.querySelector("#search");
const btn = document.querySelector("#contactBtn");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";

  for (const contact of contacts) {
    const splitContact = contact.split(":");

    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found";
  }
});
