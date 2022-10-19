const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  
  nic: {
    type: String,
    required: true,
    maxlength: 12,
    unique :true
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  districtId: {
    type: new mongoose.Schema({
      name: {
        type: String,
      },
    }),
  },
  gender : {
    type : String,
    requierd : true,
  },
  phone : {
    type : String,
    minlength : 10,
    maxlength : 10,
    requierd : true
  },
  dob : {
    type : String
  },
  username: {
    type: String,
    
    maxlength: 100
    
  },
  password: {
    type: String,
   
    maxlength: 100,
  },
  registeredDate :{
    type : Date
  }
});

module.exports = mongoose.model("Patient", patientSchema);
