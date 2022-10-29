const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => 1;

const totalLikes = (blogs) => blogs.reduce((p, c) => p + c.likes, 0);

const favoriteBlog = (blogs) => {
  let max = 0;
  let favorite = {};
  blogs.forEach((blog) => {
    if (blog.likes > max) {
      max = blog.likes;
      favorite = { ...blog };
    }
  });
  return favorite;
};

const mostBlogs = (blogs) => {
  const result = _.head(_(blogs.map((b) => b.author))
    .countBy()
    .entries()
    .maxBy(_.last));

  return result;
};

const mostLikes = (blogs) => {
  const result = _(blogs)
    .groupBy((b) => b.author)
    .map((value, key) => ({
      author: key,
      blogs: value,
    }))
    .map((a) => [a.author, a.blogs.reduce((c, n) => c + n.likes, 0)])
    .maxBy(_.last)[0];

  return result;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
