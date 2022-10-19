const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  patient :{
    type : new mongoose.Schema({
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
          gender : {
            type : String,
          },
          phone : {
            type : String,
          },
          dob : {
            type : String
          },
          username: {
            type: String,
          },
          password: {
            type: String,

          },
          registeredDate :{
            type : Date
          }
    })
  },
  payType : {
    type : String,
    required : true
  },
  hospital : {
    type : mongoose.Schema ({
        name: {
            type: String,
          },
          phone : {
            type: String,
          }
    
    })
  },
  date : {
    type : String
  },
  eye :{
    type :String
  },
  status :{
    type : String
  }

  
});

module.exports = mongoose.model("Operations", operationSchema);
