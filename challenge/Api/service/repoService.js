const axiosRequest = require('../helper/axios');
const refactor = require('../helper/refactor');
const filterByLanguage = require('../helper/filterByLanguage');

const findOldest = async (company) => {
  const response = await axiosRequest.getAllRepos(company);
  
  if (typeof response !== 'object') return { message: response, code: 500 };

  const projectsInCSharpLanguage = filterByLanguage(response, 'C#');

  const fiveOldestRepositories = projectsInCSharpLanguage.slice(0, 5);

  const refactoredRepos = refactor(fiveOldestRepositories);

  return { message: refactoredRepos, code: 200 };
};

module.exports = {
  findOldest,
};