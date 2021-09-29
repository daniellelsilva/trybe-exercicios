const myRemove = require('./myRemove.js');

describe('verifica se o item é removido do array', () => {
  it ('verifica se a função remove o numero 3 do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it ('verifica se a função NÃO retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it ('verifica se a função remove o numero 5 do array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});