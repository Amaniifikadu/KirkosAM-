const Signup = require("../models/AgelgayaddModel")

const getsignup = async (req, res) => {
  const signup = await Signup.find({}).sort({ createdAt: -1 })
  res.status(200).json(signup)
}

const createSignup = async (req, res) => {
    console.log("Signup request received")
    console.log(req.body)
  const { firstname, lastname, username, password } = req.body

  let emptyFields = []
  if (!firstname) {
    emptyFields.push('firstname')
  }
  if (!lastname) {
    emptyFields.push('lastname')
  }
  if (!username) {
    emptyFields.push('username')
  }
  if (!password) {
    emptyFields.push('password')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  try {
    const signup = await Signup.create({
      firstname,
      lastname,
      username,
      password
    })

    res.status(200).json(signup)

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getsignup,
  createSignup
}