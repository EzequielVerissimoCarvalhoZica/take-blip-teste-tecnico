const express = require('express');
const repoController = require('../controller/repoController');

const router = express.Router();

router
.route('/')
.get(repoController.getAll);

module.exports = router;