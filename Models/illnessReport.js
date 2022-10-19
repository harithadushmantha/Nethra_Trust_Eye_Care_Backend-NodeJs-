const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const illnessSchema = new mongoose.Schema({
  patient: {
    type: new mongoose.Schema({
      nic: {
        type: String,
      },
      title: {
        type: String,
      },
      name: {
        type: String,
      },
      districtId: {
        type: new mongoose.Schema({
          name: {
            type: String,
          },
        }),
      },
      gender: {
        type: String,
      },
      phone: {
        type: String,
      },
      dob: {
        type: String,
      },
      username: {
        type: String,
      },
      password: {
        type: String,
      },
      registeredDate: {
        type: Date,
      },
    }),
  },
  doctor: {
    type: mongoose.Schema({
      name: {
        type: String,
      },
      phone: {
        type: String,
      },
    }),
  },
  leftVisualAccuaracy:{
    type : String,
  },
  rightVisualAccuaracy:{
    type : String
  },
  IPD: {
    type : String
  }
  ,
  IOP: {
    type : String
  },
  reflectiveErrorType:{
    type: String
  },
  hypertension:{
    type: String
  },
  leftCatract:{
    type : String
  },
  rightCatract: {
    type: String
  },
  glaucoma:{
    type : String
  },
  sprint: {
    type : String
  },
  diabetics: {
    type : String
  },
  cardiac:{
    type: String
  }
});

module.exports = mongoose.model("Illnesses", illnessSchema);
