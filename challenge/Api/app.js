const express = require('express');
require('express-async-errors');
require('dotenv').config();

const repoRouter = require('./route/repoRouter');

const PORT = 3001 || process.env.PORT;

const app = express();

app.use('/', repoRouter);

app.listen(PORT, () => console.log(`Api on port: ${PORT}`));