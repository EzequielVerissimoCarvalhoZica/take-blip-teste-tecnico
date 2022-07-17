const express = require('express');
require('express-async-errors');
require('dotenv').config();

const errorMiddle = require('./middleware/error');
const repoRouter = require('./route/repoRouter');

const PORT = 3001 || process.env.PORT;

const app = express();

app.use('/', repoRouter);

app.use(errorMiddle);

app.listen(PORT, () => console.log(`Api on port: ${PORT}`));