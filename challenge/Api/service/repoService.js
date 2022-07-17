const axiosRequest = require('../helper/axios');
const refactor = require('../helper/refactor');
const order = require('../helper/order');

const getAll = async () => {
  const response = await axiosRequest.getAllRepos('https://api.github.com/orgs/takenet/repos');

  const projectsInCSharpLanguage = response
    .filter((project) => project.language === 'C#')
    .sort((a, b) => order(a.created_at, b.created_at));

  const fiveOldestRepositories = projectsInCSharpLanguage.slice(0, 5);

  const newObj = refactor(fiveOldestRepositories);

  return newObj;
};

module.exports = {
  getAll,
};