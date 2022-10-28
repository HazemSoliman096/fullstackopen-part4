const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
const blogsRouter = require('./controllers/Bloges');

const app = express();

mongoose.connect(config.mongoUrl);

app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);

const PORT = config.port || 3003;
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
