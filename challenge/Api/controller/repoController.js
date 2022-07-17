const repoService = require('../service/repoService');

const getAll = async (_req, res) => {
  const result = await repoService.getAll();

  return res.status(200).json(result);
};

module.exports = {
  getAll,
};