const express = require("express")

const { createSignup, getsignup } = require("../controllers/signupController")

const router = express.Router()

router.post("/", createSignup)
router.get("/", getsignup)

module.exports = router