const express = require("express")

const {  getEvent, createEvent, deleteEvent } = require("../controllers/Agelgayaddcontroller")

const router = express.Router()

router.get("/", getEvent)
router.post("/", createEvent)
router.delete("/:id", deleteEvent)

module.exports = router
