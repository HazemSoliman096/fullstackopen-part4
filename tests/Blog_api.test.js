const supertest = require('supertest');
const { PrismaClient } = require('@prisma/client');

const app = require('../index');

const prisma = new PrismaClient();

const api = supertest(app);

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(async () => {
  await prisma.$disconnect();
});
