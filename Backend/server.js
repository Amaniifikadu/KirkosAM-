require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const signupRoutes = require("./routes/signup")
const signinRoutes = require("./routes/signin")
const AgelgayaddRoutes = require("./routes/Agelgayadd")
const Agelgayadd = require('./models/AgelgayaddModel');
const EventRoutes = require("./routes/Event")
const noticeRoutes = require("./routes/notice")
const resetpassword = require("./routes/Agelgayadd")
const registerRoutes = require("./routes/register")
const mezmurregisterRoutes = require("./routes/mezmurregister")

const createAdmin = async () => {
  const adminExists = await Agelgayadd.findOne({ role: "director" });

  if (!adminExists) {
    await Agelgayadd.create({
      year: "2018",
      firstname: "Admin",
      lastname: "User",
      gender: "ወ",
      username: "admin",
      password: "1234",
      role: "director"
    });

    console.log("✅ Default director created");
  }else {
    console.log("✅ Director already exists");
  } 
};

const app = express()

app.use(express.json())

console.log(process.env.MONGO_URI)

app.use("/api/signup", signupRoutes)
app.use("/api/signin", signinRoutes)
app.use("/api/Agelgayadd", AgelgayaddRoutes)
app.use("/api/Event", EventRoutes)
app.use("/api/notice", noticeRoutes)
app.use("/api/register", registerRoutes)
app.use("/api/mezmurregister", mezmurregisterRoutes)
app.use('/uploads', express.static('uploads'));
app.use("/api/resetpassword", resetpassword)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));


mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('connected to database')

    await createAdmin();

    // listen to port
    app.listen(process.env.PORT || 4000, () => {
      console.log('listening for requests on port', process.env.PORT || 4000)
    })
  })
  .catch((err) => {
    console.log(err)
  })