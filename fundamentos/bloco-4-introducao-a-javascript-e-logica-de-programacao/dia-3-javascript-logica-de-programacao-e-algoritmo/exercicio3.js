
let n = 5;
let caracter = '*';
let linha = '';
let vazio = "#";
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      linha = linha + ' ';
    } else {
      linha = linha + caracter;
    }
  }
  console.log(linha);
  linha = '';
  inputPosition -= 1;
};
