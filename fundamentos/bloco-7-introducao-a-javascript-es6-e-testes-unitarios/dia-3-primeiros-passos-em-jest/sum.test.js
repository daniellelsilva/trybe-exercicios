const sum = require('./sum');

describe('testa a função sum', () => {
  it ('testa se a soma de 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it ('testa se a soma de 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it ('testa se retorna erro quando numero é string', () => {
    expect( () => {sum(4, '5')}).toThrowError();
  })
  it ('testa se a mensagem de erro está correta', () => {
    expect ( () => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
});