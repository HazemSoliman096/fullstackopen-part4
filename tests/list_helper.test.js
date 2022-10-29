const listHelper = require('../utils/list_helper');
const { blogs } = require('../utils/data');

test('Dummy returns one', () => {
  const emptyBlogs = [];
  const result = listHelper.dummy(emptyBlogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
  ];

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test('when list has zero blog, equals zero', () => {
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });

  test('when list has many blog, equals the sum of the likes', () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(36);
  });
});

describe('favorites', () => {
  test('get favorite blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs);
    expect(result).toEqual({
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0,
    });
  });
});

describe('mostBlogs', () => {
  test('get the author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs);
    expect(result).toBe('Robert C. Martin');
  });
});

describe('mostLikes', () => {
  test('get the author with most likes', () => {
    const result = listHelper.mostLikes(blogs);
    console.log(result);
    expect(result).toBe('Edsger W. Dijkstra');
  });
});
