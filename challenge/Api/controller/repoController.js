const repoService = require('../service/repoService');

const getAll = async (_req, res) => {
  const result = await repoService.getAll();
  const obj = {
    1: result[0],
    2: result[1],
    3: result[2],
    4: result[3],
    5: result[4],
  };

  return res.status(200).json(obj);
};

module.exports = {
  getAll,
};