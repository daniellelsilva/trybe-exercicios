
const factorial = numero => {
  let result = 1;
  for (let index = 2; index <= numero; index += 1) {
    result *= index;
  }
  return result;
}

console.log(factorial(5));

// EXercicio 2

let biggestWord = (phrase) => {
  let splitPhrase = phrase.split(' ');
  let biggestLength = 0
  let word = ''

  for (let index = 0; index < splitPhrase.length; index += 1) {
    let indexPalavra = splitPhrase[index];
    if (indexPalavra.length > biggestLength) {
      word = splitPhrase[index];
    }
  }
  return(word);
}

console.log(biggestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

// EXercicio 3 nos arquivos 'index.html' e 'script.js'

// Exercicio 4
function reciveString (string) {
  const letter = 'x';
  const word = 'darkside';
}