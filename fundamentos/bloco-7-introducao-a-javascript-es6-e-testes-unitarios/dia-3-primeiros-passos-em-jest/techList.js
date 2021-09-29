function techList(tech, name) {

  let arrayOrdenada = tech.sort();
  let array = [];

  if (arrayOrdenada.length === 0) {
    return 'Vazio!';
  } else if (arrayOrdenada.length > 0) {
    for(let index in arrayOrdenada) {
      array.push({
        tech: arrayOrdenada[index],
        name: name,
      })
    }
  }
  return array;
}
console.log(techList(
  ["React", "Jest", "HTML", "CSS", "JavaScript"],
  "Lucas"));

  module.exports = techList;