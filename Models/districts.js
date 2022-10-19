const config = require('config');
const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  }
});


module.exports = mongoose.model('Districts', districtSchema);