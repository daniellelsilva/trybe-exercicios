// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'maçã', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'uva', 'qualquerCoisa'];

const fruitSalad = (fruit, additional) => {
  const mixFruitSalad = [...specialFruit, ...additionalItens];
  return mixFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));