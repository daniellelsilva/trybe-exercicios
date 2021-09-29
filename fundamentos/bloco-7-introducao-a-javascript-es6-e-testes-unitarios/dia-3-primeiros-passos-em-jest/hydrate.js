function hydrate(stringBebidas) {
  let testando = stringBebidas.split();
  let resultadoo = testando[0].match(/\d+/gi).map(Number);
  let coposDeAgua = 0;

  for (let index = 0; index < resultadoo.length; index += 1) {
    coposDeAgua += resultadoo[index];
  }

  if (coposDeAgua <= 1) {
      return `${coposDeAgua} copo de água`;
    } else if (coposDeAgua >= 2) {
      return `${coposDeAgua} copos de água`;
    }
}
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;