const { expect } = require('chai');
const { data } = require('../Mock/apiGitHubRes');
const filterByLanguage = require('../../helper/filterByLanguage');
const allCSharpReposFiltered = require('../Mock/allCScharpReposFiltered');

describe('Testa o arquivo filterByLanguage na função filterByLanguage', () => {
    it('Testa se o retorno foi filtrado pela linguagem C#', async () => {
      const response = await filterByLanguage(data, 'C#');

      response.forEach((repo, index) => expect(repo).to.be.deep.equal(allCSharpReposFiltered[index]));
    });
});