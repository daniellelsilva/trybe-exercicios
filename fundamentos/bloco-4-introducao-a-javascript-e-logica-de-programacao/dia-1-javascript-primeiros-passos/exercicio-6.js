const pecaXadrez = "rainha";

switch(pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("uma casa em cada direcao");
        break;
    case "rainha":
        console.log("quantas casas quiser em qualquer direcao");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "torre":
        console.log("linha reta");
        break;
    case "peão":
        console.log("uma casa para frente e diagonal para atacar");
        break;
    default:
        console.log("peça não existe")
}