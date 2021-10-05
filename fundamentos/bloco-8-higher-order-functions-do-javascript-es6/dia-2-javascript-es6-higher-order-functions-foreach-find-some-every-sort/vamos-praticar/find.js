// Exercicio 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const num = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return num;
}

console.log(findDivisibleBy3And5());


// Exercicio 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const name5Letters = names.find((name) => name.length === 5);
  return name5Letters;
}

console.log(findNameWithFiveLetters());

// Exercicio 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const musicID = musicas.find((musica) => musica.id === id);
  return musicID;
}

console.log(findMusic('31031685'))