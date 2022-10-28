const dotenv = require('dotenv');

dotenv.config();

const user = process.env.USER;
const pwd = process.env.PASS;
const db = process.env.DB;
const port = process.env.PORT;

const mongoUrl = `mongodb+srv://${user}:${pwd}@fullstack.8v9soea.mongodb.net/${db}?retryWrites=true&w=majority`;

module.exports = { mongoUrl, port };
