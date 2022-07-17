const axios = require('axios');
const { expect } = require('chai');
const sinon = require('sinon');
const mockApiGitHub = require('../Mock/apiGitHubRes');
const { getAllRepos } = require('../../helper/axios');

const END_POINT = 'https://api.github.com/orgs/takenet/repos';

describe('Testa o arquivo axios na função:', () => {
  describe('getAllRepos', () => {
    before(async () => {
      sinon.stub(axios, 'get').callsFake(() => Promise.resolve(mockApiGitHub));
    });

    after(() => {
      axios.get.restore();
    });

    it('Quando passa um endpoint retorna lista com repositótios', async () => {
      const response = await getAllRepos(END_POINT);

      expect(response[0]).to.be.deep.equal(mockApiGitHub.data[0]);
    });

    it('Quando passa um endpoint retorna um valor do tipo array', async () => {
      const response = await getAllRepos(END_POINT)

      expect(response).to.be.a('array');
    });

    it('Quando não passa um endpoint válido retorna "invalid endpoint"', async () => {
      const response = await getAllRepos()

      expect(response).to.be.equal('invalid endpoint')
    })
  })
})