function repeticao(numeros) {
    let contRepeticao = 0;
    let contNumero = 0;
    let indexNumero = 0;
    
    for (let index in numeros) {
        let vericaArray = numeros[index];
        for (let index2 in numeros) {
            if (vericaArray === numeros[index2]) {
            contNumero += 1;
        }
    }
    
    if (contNumero > contRepeticao) {
        contRepeticao = contNumero;
        indexNumero = index;
    }
    contNumero = 0;
    }
    return numeros[indexNumero];
}
console.log(repeticao([2, 3, 2, 5, 8, 2, 3]));
