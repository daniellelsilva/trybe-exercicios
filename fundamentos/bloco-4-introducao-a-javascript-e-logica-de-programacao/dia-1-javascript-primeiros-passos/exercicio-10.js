const custo = 10;
const venda = 20;

let custoFinal = custo + 0.20;
let lucro = venda - custoFinal;

if (custo < 0 || venda < 0) {
    console.log("erro");
} else {
    console.log(lucro*1000);
}