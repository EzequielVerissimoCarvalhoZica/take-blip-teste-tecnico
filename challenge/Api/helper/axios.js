const axios = require('axios');

const getAllRepos = async (company) => {
  if (!company || typeof company !== 'string') {
    return 'invalid endpoint';
  }
  const { data } = await axios.get(`https://api.github.com/orgs/${company}/repos`);

  return data;
};

module.exports = {
  getAllRepos,
};