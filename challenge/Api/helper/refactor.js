module.exports = (arr) => arr.map(({ owner: { avatar_url: avatarUrl }, description, name }) => ({
    name,
    description,
    avatarUrl,
  }));