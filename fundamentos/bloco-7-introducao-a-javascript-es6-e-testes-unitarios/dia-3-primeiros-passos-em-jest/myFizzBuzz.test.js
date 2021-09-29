const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it ('verifica se o numero 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  it ('verifica se o numero 9 retorna fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  })
  it ('verifica se o numero 20 retorna buzz', () => {
    expect(myFizzBuzz(20)).toEqual('buzz');
  })
  it ('verifica se o numero 2 retorna o proprio numero', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })
  it ('verifica se o retorno é null caso o parametro não seja numero', () => {
    expect(myFizzBuzz('1')).toEqual(false)
  })
})