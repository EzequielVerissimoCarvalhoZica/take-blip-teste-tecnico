const { expect } = require('chai');
const { data } = require('../Mock/apiGitHubRes');
const refactor = require('../../helper/refactor');

const mockRefactoredData = {
  name: "library.data",
  description: "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
  avatarUrl: "https://avatars.githubusercontent.com/u/4369522?v=4",
};

describe('Testa o arquivo refactor na função refactor', () => {
  const response = refactor(data)

  it('Dada determinada repositorio retorna o repositorio refatorado', () => {
    expect(response[0]).to.be.deep.equal(mockRefactoredData)
  });

  it('Dada determinada repositorio retorna uma propriedade "avatarUrl"', () => {
    expect(response[0]).property('avatarUrl')
  });
});
