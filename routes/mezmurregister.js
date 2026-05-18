const express = require('express');

const router = express.Router();

const {
  createMezmurRegister,
  getMezmurRegister
} = require('../controllers/Agelgayaddcontroller');

router.post('/', createMezmurRegister);
router.get('/', getMezmurRegister);

module.exports = router;
