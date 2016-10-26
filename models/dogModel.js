var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
  name: {type: String, required: true},
  breed: {type: String, required: true},
  hasTail: Boolean,
  numberOfFeet: Number

});

 module.exports = mongoose.model('Dog', dogSchema);
