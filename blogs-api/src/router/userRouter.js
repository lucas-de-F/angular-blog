const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');

const { getAllUsers, getUserById } = require('../route/User/controller');
const validateToken = require('../middlewares/validateToken');

// router.post('/', validateUserData, rescue(InsertUser));
router.get('/', validateToken, rescue(getAllUsers));
// router.get('/', rescue(getAllUsers));
router.get('/:id', validateToken, rescue(getUserById));
// router.get('/:id', rescue(getUserById));

module.exports = router;
