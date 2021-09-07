function maiorQuantidadeCaracteres (nomes){
    let nome = [""];
    for (let index in nomes){
        if (nome.length < nomes[index].length){
            nome = nomes[index];
        }
    }
    return nome
}

console.log(maiorQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));