function encode(string) {
  let splitString = string.split('');
  let arrayNovo = [];

  for (let index = 0; index < splitString.length; index += 1) {
    if (splitString[index] === 'a') {
      arrayNovo.push('1');
    } else if (splitString[index] === 'e') {
      arrayNovo.push('2');
    } else if (splitString[index] === 'i') {
      arrayNovo.push('3');
    } else if (splitString[index] === 'o') {
      arrayNovo.push('4');
    } else if (splitString[index] === 'u') {
      arrayNovo.push('5');
    } else {
      arrayNovo.push(splitString[index]);
    }
  }
  let stringNova = arrayNovo.join('');
  return stringNova;
}
// console.log(encode('hi there!'));

function decode(string) {
  let splitString2 = string.split('');
  let arrayNovo2 = [];

  for (let index = 0; index < splitString2.length; index += 1) {
    if (splitString2[index] === '1') {
      arrayNovo2.push('a');
    } else if (splitString2[index] === '2') {
      arrayNovo2.push('e');
    } else if (splitString2[index] === '3') {
      arrayNovo2.push('i');
    } else if (splitString2[index] === '4') {
      arrayNovo2.push('o');
    } else if (splitString2[index] === '5') {
      arrayNovo2.push('u');
    } else {
      arrayNovo2.push(splitString2[index]);
    }
  }
  let stringNova2 = arrayNovo2.join('');
  return stringNova2;
}
// console.log(decode('h3 th2r2!'));

module.exports = {encode, decode};