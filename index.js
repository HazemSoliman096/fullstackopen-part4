const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const dotenv = require('dotenv');

dotenv.config();

const user = process.env.USER;
const pwd = process.env.PASS;
const db = process.env.DB;

const mongoUrl = `mongodb+srv://${user}:${pwd}@fullstack.8v9soea.mongodb.net/${db}?retryWrites=true&w=majority`;

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model('Blog', blogSchema);

mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then((blogs) => {
      response.json(blogs);
    });
});

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body);

  blog
    .save()
    .then((result) => {
      response.status(201).json(result);
    });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
