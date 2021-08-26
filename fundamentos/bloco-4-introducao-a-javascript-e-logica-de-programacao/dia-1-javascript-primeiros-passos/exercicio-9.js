const primeiroNumero = 3;
const segundoNumero = 4;
const terceiroNumero = 8;

let primeiroParOuImpar = primeiroNumero % 2;
let segundoParOuImpar = segundoNumero % 2;
let terceiroParOuImpar = terceiroNumero % 2;

if (primeiroParOuImpar === 1 || segundoParOuImpar === 1 || terceiroParOuImpar === 1) {
    console.log(true);
} else {
    console.log(false);
}