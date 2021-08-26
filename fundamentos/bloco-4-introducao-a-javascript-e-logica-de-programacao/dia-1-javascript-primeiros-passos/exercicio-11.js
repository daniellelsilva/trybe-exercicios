const salario = 3000
let descontoINSS = 0;
let descontoIR = 0;



if (salario <= 1556.94){
    descontoINSS = salario * 0.08;
} else if (salario >= 1556.95 && salario <= 2594.92) {
    descontoINSS = salario * 0.09;
} else if (salario >= 2594.93 && salario <= 5189.82) {
    descontoINSS = salario * 0.11;
} else {
    deescontoINSS = salario - 570.88;
}

let salarioComDescontoINSS = salario - descontoINSS;


if (salarioComDescontoINSS <= 1903.98) {
    console.log("isento de renda");
} else if (salarioComDescontoINSS >= 1903.99 && salarioComDescontoINSS <= 2826.65) {
    descontoIR = ((salarioComDescontoINSS * 0.075) - 142.80);
} else if (salarioComDescontoINSS >= 2826.66 && salarioComDescontoINSS <= 3751.05) {
    descontoIR = ((salarioComDescontoINSS * 0.15) - 354.80);
} else if (salarioComDescontoINSS >= 3751.06 && salarioComDescontoINSS <= 4664.68) {
    descontoIR = ((salarioComDescontoINSS * 0.225) - 636.13);
} else if (salarioComDescontoINSS >= 4664.68) {
    descontoIR = ((salarioComDescontoINSS * 0.275) - 869.36);
}
 let salarioLiquido = salarioComDescontoINSS - descontoIR;
 console.log(salarioLiquido)