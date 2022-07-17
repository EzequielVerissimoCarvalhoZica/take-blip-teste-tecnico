const repoService = require('../service/repoService');

const findOldest = async (_req, res) => {
  const { message, code } = await repoService.findOldest('takenet');
  if (code !== 200) return res.status(code).json(message);

  const obj = {
    1: message[0],
    2: message[1],
    3: message[2],
    4: message[3],
    5: message[4],
  };

  return res.status(code).json(obj);
};

module.exports = {
  findOldest,
};