const primeiroNumero = 7;
const segundoNumero = 8;
const terceiroNumero = 9;

let primeiroParOuImpar = primeiroNumero % 2;
let segundoParOuImpar = segundoNumero % 2;
let terceiroParOuImpar = terceiroNumero % 2;

if (primeiroParOuImpar === 0 || segundoParOuImpar === 0 || terceiroParOuImpar === 0) {
    console.log(true);
} else {
    console.log(false);
}