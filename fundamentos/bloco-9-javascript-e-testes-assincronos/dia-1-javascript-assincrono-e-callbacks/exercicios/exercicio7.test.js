const uppercase = require('./exercicio7.js');

it ('verifica se a função transforma teste em TESTE', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done()
    } catch (error) {
      done(error)
    }
  });
});