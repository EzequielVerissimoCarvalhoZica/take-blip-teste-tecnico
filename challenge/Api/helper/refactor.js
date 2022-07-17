module.exports = (arr) => arr.map(({ owner: { avatar_url: avatarUrl }, description, name }) => ({
    avatarUrl,
    description,
    name,
  }));