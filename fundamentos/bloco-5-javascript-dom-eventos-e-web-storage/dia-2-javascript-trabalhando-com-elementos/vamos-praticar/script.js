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


// Exercicio 01 parte 02;
let criaIrmão = document.querySelector('#pai');
let criandoImrão = document.createElement('section');
criandoImrão.id = 'irmãoDoElementoOndeVoceEsta';
criaIrmão.appendChild(criandoImrão);

// Exercicio 02 parte 02;
let criarFilho = document.querySelector('#elementoOndeVoceEsta');
let criandoFilho = document.createElement('section');
criandoFilho.id = 'FilhoDoElementoOndeVoceEsta';
criarFilho.appendChild(criandoFilho);

// Exercicio 03 parte 02;
let criarFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let criandoFilhoDoFilho = document.createElement('section');
criandoFilhoDoFilho.id = 'FilhoDoPrimeiroFilhoDoFilho';
criarFilhoDoFilho.appendChild(criandoFilhoDoFilho)

// Exercicio 04 parte 02;
document.querySelector('#FilhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;