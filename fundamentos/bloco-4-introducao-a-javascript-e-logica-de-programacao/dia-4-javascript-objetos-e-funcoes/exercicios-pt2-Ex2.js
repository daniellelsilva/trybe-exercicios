function maiorNumero (numeros) {
    let indiceMaior = 0;
    for (let index in numeros) {
        if (numeros[indiceMaior] < numeros[index]) {
            indiceMaior =  index;
        
        }
    }
    return indiceMaior
}
console.log(maiorNumero([2, 3, 6, 7, 10, 1]));