// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((p, c) => p + c.likes, 0);

module.exports = { dummy, totalLikes };
