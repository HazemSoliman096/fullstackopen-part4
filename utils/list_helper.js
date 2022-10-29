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

module.exports = { dummy, totalLikes, favoriteBlog };
