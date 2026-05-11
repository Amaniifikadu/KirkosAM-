const Signup = require("../models/AgelgayaddModel");

// Function to handle user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  let emptyFields = [];
   if (!username) {
     emptyFields.push('username');
   }
    if (!password) {
      emptyFields.push('password');
    }
   if (emptyFields.length > 0) {
     return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
   }

try{

  const user = await Signup.findOne({ username });

  if (!user) {
    return res.status(400).json({ error: 'User does not exist' });
  }
  if (user.password !== password) {
    return res.status(400).json({ error: 'Incorrect password' });
  }

  res.status(200).json({
     user:{
      username: user.username,
      role: user.role
     }});
}catch (error) {
  res.status(400).json({ error: error.message });
}

 

}

module.exports = {
  loginUser
};

