module.exports = (err, _req, res, _next) => {
  const message = err.message || 'Something broke!';

  if (err.message === 'Request failed with status code 400') {
    return res.status(500).json({ message: 'Internal server error, request in github' });
  }
  console.error(err.message);

  return res.status(500).json({ message });
};