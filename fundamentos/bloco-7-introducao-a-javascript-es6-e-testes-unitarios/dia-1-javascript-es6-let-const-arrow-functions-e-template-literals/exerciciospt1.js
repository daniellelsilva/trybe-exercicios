// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//   }
//       console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

// testingScope(true);

// EXercicio 1 pt1 dia 7.1 
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

testingScope(true);

// EXercicio 2 pt1 dia 7.1
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const organized = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}
const organizedArray = organized();
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); 

