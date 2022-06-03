const express = require('express');

const router = express.Router();

const validateToken = require('../middlewares/validateToken');

router.get('/', validateToken);

module.exports = router;
