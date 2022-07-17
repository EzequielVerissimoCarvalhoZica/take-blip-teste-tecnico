module.exports = (err, _req, res, _next) => {
  const message = err.message || 'Something broke!';

  console.error(message);

  return res.status(500).json({ message });
};