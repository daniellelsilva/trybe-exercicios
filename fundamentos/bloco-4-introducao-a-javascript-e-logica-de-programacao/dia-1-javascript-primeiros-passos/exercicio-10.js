const custo = 10;
const venda = 20;

let custoFinal = custo * 1.20;
let lucro = venda - custoFinal;

if (custo < 0 || venda < 0) {
    console.log("erro, valor deve ser positivo");
} else {
    console.log(lucro*1000);
}