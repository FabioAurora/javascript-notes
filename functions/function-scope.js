const x = 1; // global scope

function a() {
  const y = 2;
  output(z); // inside a function
}

function b() {
  const z = 3;
  output(y);
}

function output(value) {
  // global scope
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}

// function scope:
// when we create a function, all variables, expressions and other values are inside their current scope and cant be reached by code from outside that function.
//if we create a variable outside a function, it will be in Global scope, and can be accessed all over our code.