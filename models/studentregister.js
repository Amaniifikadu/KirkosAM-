const mongoose = require('mongoose');

const studentRegisterSchema = new mongoose.Schema({
  photo:{
    type: String,
    required: false
  },
  year: {
    type: Number,
    required: true
  },
  mdb: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  grandFatherName: {
    type: String,
    required: true
  }, 
  christianName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  houseNumber: {
    type: String,
    required: true
  },
  parentName: {
    type: String,
    required: true
  },
  parentPhone1: {
    type: String,
    required: true
  },
  parentPhone2: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
}, { timestamps: true }); 

module.exports = mongoose.model('StudentRegister', studentRegisterSchema);``
