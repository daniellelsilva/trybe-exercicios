let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media =0;
let maiorNumero = 0;
let valoresImpares = 0;
let menorNumero = numbers[0];

// Exercicio 1
for (let number of numbers){
    console.log("Exercicio 1: ", number);
}

// Exercicio 2
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log("EXercicio 2: ", soma);

// EXercicio 3
media = soma / numbers.length;
console.log("Exercicio 3: ", media);

// Exercicio 4
if(media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// Exercicio 5
for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
console.log("Exercicio 5: ", maiorNumero);

// EXercicio 6
for (let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] % 2 === 1) {
        valoresImpares += 1;
    } 
}
    if(valoresImpares === 0) {
        console.log("nenhum valor ímpar");
    } else {
        console.log("Exercicio 6: ", valoresImpares);
    }
    
// EXercicio 7
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log("Exercicio 7: ", menorNumero);


// Exercicio 8 (novas variáveis)
let arrayNumeros = [];

for (index = 1; index <= 25; index += 1){
    arrayNumeros.push(index);
}

console.log("Exercicio 8: ", arrayNumeros);

// Exercicio 9
for (index = 0; index < arrayNumeros.length; index += 1) {
    console.log(arrayNumeros[index] / 2);
}
