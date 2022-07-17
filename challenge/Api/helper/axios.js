const axios = require('axios');

const getAllRepos = async (endpoint) => {
  const { data } = await axios.get(endpoint);

  return data;
};

module.exports = {
  getAllRepos,
};