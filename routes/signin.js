const express = require('express');
const { loginUser } = require('../controllers/signinController');
const router = express.Router();

router.post('/', loginUser);
module.exports = router;