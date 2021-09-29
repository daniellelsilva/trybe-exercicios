const {encode, decode} = require('./encodeDecode');

describe ('testa as funções encode e decode', () => {
  it ('testa se encode e decode são funções', () => {
    expect(typeof(encode, decode)).toBe('function');
  });
  it ('testa se a função encode codifica "a" no numero 1', () => {
    expect(encode('bala')).toEqual('b1l1');
  });
  it ('testa se a função encode condifica "e" no numero 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it ('testa se a função encode condifica "i" no numero 3', () => {
    expect(encode('lili')).toEqual('l3l3');
  });
  it ('testa se a função encode condifica "o" no numero 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it ('testa se a função encode condifica "u" no numero 5', () => {
    expect(encode('uva')).toEqual('5v1');
  });
  it ('testa se a função encode retorna uma string com o mesmo tamanho da original', () => {
    expect(encode('Trybe').length).toEqual(5);
  });

  it ('testa se a função decode codifica o numero 1 na letra "a"', () => {
    expect(decode('b1l1')).toEqual('bala');
  });
  it ('testa se a função decode codifica o numero 2 na letra "e"', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it ('testa se a função decode codifica o numero 3 na letra "i"', () => {
    expect(decode('l3l3')).toEqual('lili');
  });
  it ('testa se a função decode codifica o numero 4 na letra "o"', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it ('testa se a função decode codifica o numero 5 na letra "u"', () => {
    expect(decode('5v1')).toEqual('uva');
  });
  it ('testa se a função decode retorna uma string com o mesmo tamanho da original', () => {
    expect(decode('Trybe').length).toEqual(5);
  });
})