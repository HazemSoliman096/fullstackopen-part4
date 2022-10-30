const blogsRouter = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

blogsRouter.get('/', async (request, response) => {
  const Blogs = await prisma.blogs.findMany({});
  response.json(Blogs);
});

blogsRouter.post('/', async (request, response) => {
  const {
    author, likes, title, url,
  } = request.body;
  const blogs = await prisma.blogs.create({
    data: {
      author,
      likes,
      title,
      url,
      v: 0,
    },
  });
  response.status(201).json(blogs);
});

module.exports = blogsRouter;
