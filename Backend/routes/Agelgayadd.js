const express = require("express")

const { createAgelgayadd, getAgelgayadd, deleteAgelgayadd, updateAgelgayadd, getEvent, createEvent, resetPassword } = require("../controllers/Agelgayaddcontroller")

const router = express.Router()

router.post("/", createAgelgayadd)
router.get("/", getAgelgayadd)
router.delete("/:id", deleteAgelgayadd)
router.patch("/:id", updateAgelgayadd)
router.patch('/resetpassword', resetPassword)


module.exports = router


