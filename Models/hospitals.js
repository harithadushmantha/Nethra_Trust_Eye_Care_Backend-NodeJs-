const config = require('config');
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
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


module.exports = mongoose.model('Hospitals', hospitalSchema);