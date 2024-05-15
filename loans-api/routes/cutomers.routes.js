var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");

const customerModel = require("../models/customers.model")


/* create home page. */
router.post('/add', async function (req, res, next) {
  try {
    const params = req.body;
    const user = new customerModel();
    console.log("user", user);


    user.firstname = params.firstname;
    user.lastname = params.lastname;
    user.email = params.email;
    user.location = params.location;
    user.mobile = params.mobile;
    user.dob = params.dob;
    user.age = params.age;
    user.gender = params.gender;
    user.profilepicture = params.profilepicture;
    user.coverPicture = params.coverPicture;
    user.worksat = params.worksat;


    // Check if the user with the provided email or nickname already exists
    let existingUser;

    if (params.email) {
      existingUser = await customerModel.findOne({ email: params.email.toLowerCase() });
    }

    if (params.nick) {
      existingUser = await customerModel.findOne({ nick: params.nick.toLowerCase() });
    }

    if (existingUser) {
      return res.status(200).send({
        message: "The user already exists. Try another nickname or email.",
      });
    }

    // Save the user if not already existing
    const userStored = await user.save();

    console.log("userStored", userStored);

    if (userStored) {
      return res.status(200).send({ user: userStored });
    } else {
      return res.status(404).send({ message: "User not saved" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Error in the request" });
  }
});

// EDIT route
router.put('/edit/:id', async function (req, res, next) {
  try {
    const userId = req.params.id;
    const params = req.body;

    const updatedUser = await customerModel.findByIdAndUpdate(userId, params, { new: true });

    if (updatedUser) {
      return res.status(200).send({ user: updatedUser });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Error in the request" });
  }
});

// Get ALL route
router.get('/list', async function (req, res, next) {
  try {
    const users = await customerModel.find();

    return res.status(200).send({ users: users });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Error in the request" });
  }
});

// Get by ID route
router.get('/get/:id', async function (req, res, next) {
  try {
    const userId = req.params.id;

    const user = await customerModel.findById(userId);

    if (user) {
      return res.status(200).send({ user: user });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Error in the request" });
  }
});

// Delete route
router.delete('/delete/:id', async function (req, res, next) {
  try {
    const userId = req.params.id;

    const deletedUser = await customerModel.findByIdAndDelete(userId);

    if (deletedUser) {
      return res.status(200).send({ message: "User deleted successfully" });
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ message: "Error in the request" });
  }
});

module.exports = router;