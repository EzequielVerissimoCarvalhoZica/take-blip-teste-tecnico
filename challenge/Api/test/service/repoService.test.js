const { expect } = require('chai');
const sinon = require('sinon');
const axiosRequest = require('../../helper/axios');
const repoService = require('../../service/repoService')
const { data } = require('../Mock/apiGitHubRes');
const cSharpReposFiltered = require('../Mock/cSharpReposFiltered');

describe('Testa o arquivo repoService na função:', () => {
  describe('findOldest', () => {
    it('Testa o retorno positivo da função', async () => {
      sinon.stub(axiosRequest, 'getAllRepos').callsFake(() => Promise.resolve(data));

      const response = await repoService.findOldest('takenet');
      expect(response).to.be.deep.equal(cSharpReposFiltered);

      axiosRequest.getAllRepos.restore();
    });

    it('Testa o retorno da função quando é passado um endpoint inválido', async () => {
      const response = await repoService.findOldest();

      expect(response).to.be.deep.equal({ message: 'invalid endpoint', code: 500 });
    });
  });
})