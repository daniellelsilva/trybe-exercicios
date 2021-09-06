// Exercicio 1:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
    console.log('Bem vinda, ' + info.personagem);

// EXercicio 2:
    info.recorrente = 'Sim';
    console.log(info);

// Exercicio 3:
    for (let key in info) {
        console.log(key);
    };

// Exercicio 4:
    for (let key2 in info) {
        console.log(info[key2]);
    };

//   EXercicio 5:
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim"
  };

for (let propriedades in info){
    if (propriedades === 'recorrente' &&
        info.recorrente === "sim" && info2.recorrente === "sim"){
        console.log("ambos recorrentes");
    } else {
        console.log(info[propriedades] + " e " + info2[propriedades]);
    }
}