const order = require('./order');

module.exports = (data, language) => (
  data
  .filter((project) => project.language === language)
  .sort((a, b) => order(a.created_at, b.created_at))
  );