const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload')
const { createstudentregister, getStudentRegister, deleteaddstudent, updateaddstudent  } = require('../controllers/Agelgayaddcontroller'); 

// student register routes
router.post('/studentregister', upload.single('photo') ,createstudentregister);
router.get('/studentregister', getStudentRegister);
router.delete('/studentregister/:id', deleteaddstudent);
router.patch('/studentregister/:id', updateaddstudent);
module.exports = router;

