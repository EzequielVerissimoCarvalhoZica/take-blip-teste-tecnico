const { expect } = require('chai');
const order = require('../../helper/order');

const MOCK_DATES = {
  a: '2013-10-25T15:18:07Z',
  b: '2013-10-25T13:04:51Z',
};

describe('Testa o arquivo order na função order', () => {
  const response = order(MOCK_DATES.a, MOCK_DATES.b)
  it('Dada determinada data em string retorna a subitração', () => {
    expect(response).to.be.equal(7996000)
  });
  it('Dada determinada data em string retorna um tipo "number"', () => {
    expect(response).to.be.a('number')
  });
  it('Dada determinada data em string inválida retorna NaN', () => {
    const invalidResponse = order('data/invalida', 'data/invalida')
    expect(invalidResponse).to.be.NaN
  });
});