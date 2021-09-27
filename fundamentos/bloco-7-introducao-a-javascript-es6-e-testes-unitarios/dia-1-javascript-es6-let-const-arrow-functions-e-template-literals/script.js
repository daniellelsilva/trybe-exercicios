// EXercicio 3
const button = document.getElementById('button');
const counter = document.getElementById('counter');
let clickCount = 0;

button.addEventListener('click', () => {counter.value = clickCount += 1;})