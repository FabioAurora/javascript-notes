// Arrow function live sample:
const box = document.querySelector('#box');
const output = document.querySelector('#output');
box.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

console.log()
