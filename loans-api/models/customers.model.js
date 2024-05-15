const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    location: String,
    mobile: Number,
    dob: String,
    age: String,
    gender: String,
    profilepicture: String,
    coverPicture: String,
    worksat: String,
    aadharcard: String,
    pancard: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customers", userSchema);