const mongoose = require("mongoose")

const Schema = mongoose.Schema

const AgelgayaddSchema = new Schema({
   year: {
    type: Number,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
   gender: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
   role: {
    type: String,
    enum: ["director", "student", "ethics", "education", "mezmur", "art"],
    default: "student"
   }
})

// event

module.exports = mongoose.model("Agelgayadd", AgelgayaddSchema);