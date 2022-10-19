const config = require('config');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
  phone : {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  }
});
doctorSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
  return token;
}

module.exports = mongoose.model('Doctors', doctorSchema);



/*const config = require('config');
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  phone : {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  }
});


module.exports = mongoose.model('Doctors', doctorSchema);*/