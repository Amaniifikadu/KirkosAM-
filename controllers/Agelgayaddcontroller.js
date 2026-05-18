const Agelgayadd = require("../models/AgelgayaddModel")
const Event = require("../models/Events")
const Notice = require("../models/notice")
const StudentRegister = require("../models/studentregister")
const MezmurRegister = require("../models/mezmurregister")
const upload = require('../middleware/upload')
const fs = require("fs");
const path = require("path");

const getAgelgayadd = async (req, res) => {
  const agelgayadd = await Agelgayadd.find({}).sort({ createdAt: -1 })
  res.status(200).json(agelgayadd)
}

//addagelgay
const createAgelgayadd = async (req, res) => {
    console.log("Agelgayadd request received")
    console.log(req.body)
  const { year, firstname, lastname, gender, username, password, role } = req.body

  let emptyFields = []
if (!year) {
    emptyFields.push('year')
  }
  if (!firstname) {
    emptyFields.push('firstname')
  }
  if (!lastname) {
    emptyFields.push('lastname')
  }
   if (!gender) {
    emptyFields.push('gender')
  }
  if (!username) {
    emptyFields.push('username')
  }
  if (!password) {
    emptyFields.push('password')
  }
if (!role) {
    emptyFields.push('role')
}

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  try {
    const agelgayadd = await Agelgayadd.create({
      year,
      firstname,
      lastname,
      gender,
      username,
      password,
      role
    })

    res.status(200).json(agelgayadd)

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// RESET PASSWORD
const resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;

  if (!username || !newPassword) {
    return res.status(400).json({ error: "Fill all fields" });
  }

  try {
    const user = await Agelgayadd.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.password = newPassword; // (later you should hash it)
    await user.save();

    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// Agelgaydetials delete
const deleteAgelgayadd = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Agelgayadd.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// Agelgaydetials UPDATE
const updateAgelgayadd = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Agelgayadd.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "Agelgay not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Update failed" });
  }
};

//event
const getEvent = async (req, res) => {
  const event = await Event.find({}).sort({ createdAt: -1 })
  res.status(200).json(event)
}

const createEvent = async (req, res) => {
  const { title, date, time, location, description } = req.body     
  try {
    const event = await Event.create({
      title,    
      date,
      time,
      location,
      description
    })  
    res.status(200).json(event)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// notice
const getNotices = async (req, res) => {
  const notices = await Notice.find().sort({ createdAt: -1 });
  res.status(200).json(notices);
};

// CREATE notice
const createNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(200).json(notice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE notice
const deleteNotice = async (req, res) => {
  const { id } = req.params;

  const notice = await Notice.findByIdAndDelete(id);

  if (!notice) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(notice);
};

// studentregister
const getStudentRegister = async (req, res) => {
  const studentregister = await StudentRegister.find({}).sort({ createdAt: 1 })
  res.status(200).json(studentregister)
}

const createstudentregister = async (req, res) => {

  const photo = req.file ? req.file.filename : null;

  const { year,mdb, firstName, fatherName, grandFatherName, christianName,
    gender, age, grade, district, houseNumber, parentName, parentPhone1, parentPhone2, fee } = req.body

  let emptyFields = []
  if(!year){
    emptyFields.push('year')
  }
  if (!mdb) {
    emptyFields.push('mdb')
  }
  if (!firstName) {
    emptyFields.push('firstName')
  }
  if (!fatherName) {
    emptyFields.push('fatherName')
  }
  if (!grandFatherName) {
    emptyFields.push('grandFatherName')
  }
  if (!christianName) {
    emptyFields.push('christianName')
  }
  if (!gender) {
    emptyFields.push('gender')
  }
  if (!age) {
    emptyFields.push('age')
  }
  if (!grade) {
    emptyFields.push('grade')
  }
  if (!district) {
    emptyFields.push('district')
  }
  if (!houseNumber) {
    emptyFields.push('houseNumber')
  }
  if (!parentName) {
    emptyFields.push('parentName')
  }
  if (!parentPhone1) {
    emptyFields.push('parentPhone1')
  }
  if (!parentPhone2) {
    emptyFields.push('parentPhone2')
  }
  if (!fee) {
    emptyFields.push('fee')
  }


  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill in all fields", emptyFields });
  }

 
      

  try {
    const student = await StudentRegister.create({
      photo,
      year,
      mdb,
      firstName,
      fatherName,
      grandFatherName,
      christianName,
      gender,
      age,
      grade,
      district, 
      houseNumber,
      parentName,
      parentPhone1,
      parentPhone2,
      fee
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//mezmurregister
const getMezmurRegister = async (req, res) => {
  const mezmurregister = await MezmurRegister.find({}).sort({ createdAt: -1 })
  res.status(200).json(mezmurregister)
}

const createMezmurRegister = async (req, res) => {
  const { firstName, fatherName, grandFatherName, christianName,
    identifier, gender, age, grade, district, houseNumber, parentName, parentPhone1, parentPhone2 } = req.body

  let emptyFields = []    
  if (!firstName) {
    emptyFields.push('firstName')
  } 
  if (!fatherName) {
    emptyFields.push('fatherName')
  }
  if (!grandFatherName) {
    emptyFields.push('grandFatherName')
  } 
  if (!christianName) {
    emptyFields.push('christianName')
  }
  if (!identifier) {
    emptyFields.push('identifier')
  }
  if (!gender) {
    emptyFields.push('gender')    
  }
  if (!age) {
    emptyFields.push('age')
  } 
  if (!grade) {
    emptyFields.push('grade')
  } 
  if (!district) {
    emptyFields.push('district')
  }
  if (!houseNumber) {
    emptyFields.push('houseNumber')
  }
  if (!parentName) {
    emptyFields.push('parentName')
  }
  if (!parentPhone1) {
    emptyFields.push('parentPhone1')
  }
  if (!parentPhone2) {
    emptyFields.push('parentPhone2')
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please fill in all fields", emptyFields });
  }



  try {
    const mezmur = await MezmurRegister.create({
      firstName,
      fatherName,
      grandFatherName,
      christianName,
      identifier,
      gender,
      age,
      grade,
      district,
      houseNumber,
      parentName,
      parentPhone1,
      parentPhone2
    });
    res.status(200).json(mezmur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const deleteaddstudent = async (req, res) => {
    const { id } = req.params;

    try {
      const student = await StudentRegister.findByIdAndDelete(id);

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: "Invalid ID" });
    }

    if (student.photo) {
      const filePath = path.join(__dirname, "..", "uploads", student.photo);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("Image delete error:", err);
        } else {
          console.log("Image deleted successfully");
        }
      });
  }};

  const updateaddstudent = async (req, res) => {
    const { id } = req.params;

    try {
      const student = await StudentRegister.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
 
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.status(200).json(student);
    } catch (error) {
      res.status(400).json({ error: "Invalid ID" });
    }
  //    try {
  //   const updateData = {
  //     ...req.body
  //   };

  //   if (req.file) {
  //     updateData.profileImage = `/uploads/${req.file.filename}`;
  //   }

  //   const student = await StudentRegister.findByIdAndUpdate(
  //     id,
  //     updateData,
  //     { new: true }
  //   );

  //   res.status(200).json(student);
  // } catch (error) {
  //   res.status(400).json({ error: "Update failed" });
  // }
  };


module.exports = {
  getAgelgayadd,
  createAgelgayadd,
  resetPassword,
  deleteAgelgayadd,
  updateAgelgayadd,
  getEvent,
  createEvent,
  deleteEvent,
  getNotices,
  createNotice,
  deleteNotice ,
  createstudentregister,
  getStudentRegister,
  deleteaddstudent,
  updateaddstudent,
  createMezmurRegister,
  getMezmurRegister   
}