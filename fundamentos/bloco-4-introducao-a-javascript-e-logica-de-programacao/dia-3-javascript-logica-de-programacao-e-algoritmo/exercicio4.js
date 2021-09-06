
let numero = 5;
let caracter = '*';
let linha = '';

let meio = (numero + 1) / 2;
let controleEsquerda = meio;
let controleDireito = meio;

for (let linhaIndex = 0; linhaIndex <= meio; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= numero; colunaIndex += 1) {
    if (colunaIndex > controleEsquerda && colunaIndex < controleDireito) {
      linha = linha + caracter;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  controleDireito += 1;
  controleEsquerda -= 1
};
