// EXercicio 01 parte 1;
document.querySelector('#elementoOndeVoceEsta');

// EXercicio 02 parte 1;
let mudaCorDeFundo = document.querySelector('#elementoOndeVoceEsta');
mudaCorDeFundo.parentElement.style.color = 'green';

// EXercicio 03 parte 1;
let adicionaTexto = document.querySelector('#elementoOndeVoceEsta');
adicionaTexto.firstElementChild.innerText = 'adcionando texto a filho do filho';

// EXercicio 04 parte 1;
document.querySelector('#pai').firstElementChild;

// EXercicio 05 parte 1;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// EXercicio 06 parte 1;
document.querySelector('#elementoOndeVoceEsta').nextSibling;

// EXercicio 07 parte 1;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

// EXercicio 08 parte 1;
document.querySelector('#pai').lastChild.previousElementSibling;