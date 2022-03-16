const para = document.querySelector('p');
const dogs = [{
  name: 'Bolinhas',
  age: 2,
  color: 'black & white'
},
{
  name: 'Hugo',
  age: 8,
  color: 'grey'
},
{
  name: 'Kaspas',
  age: 5,
  color: 'brown & black'
}]

function makeGreen() {
  para.style.color = "#BADA55";
  para.style.fontSize = "50px";
}

para.addEventListener("click", makeGreen);

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "hero");
//console.log(`Hello I am a ${var}`)// better

// Styled
//console.log('%c I am some great text', 'background:red; text-shadow: 10px 10px 0 blue')

// Warning!
console.warn("OH NOOO");

// Error :
console.error("oops!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2, "That is wrong!");
console.assert(para.classList.contains("ouch"), "That is wrong!");

// clearing

console.clear();

// Viewing DOM Elements
console.log(para);
console.dir(para);
console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old ${dog.color} dog`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`)
});

// counting
console.count("wes");
console.count("wes");
console.count("Fabio");
console.count("Fabio");
console.count("wes");
console.count("Fabio");
console.count("Fabio");
console.count("Fabio");
console.count("Fabio");
console.count("wes");

// Timing
console.time("fetching data");
fetch("https://api.github.com/users/FabioAurora")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs)
