const express = require("express")
const router = express.Router()
const {
  getNotices,
  createNotice,
  deleteNotice
} = require("../controllers/Agelgayaddcontroller")

// notice routes
router.get("/notices", getNotices)
router.post("/notices", createNotice)
router.delete("/notices/:id", deleteNotice)

module.exports = router