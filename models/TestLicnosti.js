const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema

const TestLicnostiSchema = new Schema({
  ans1:{
    type: String,
    required: true
  },
  ans2:{
    type: String,
    required: true
  },
  ans3:{
    type: String,
    required: true
  },
  ans4:{
    type: String,
    required: true
  },
  ans5:{
    type: String,
    required: true
  },
  ans6:{
    type: String,
    required: true
  },
  ans7:{
    type: String,
    required: true
  },
  ans8:{
    type: String,
    required: true
  },
  ans9:{
    type: String,
    required: true
  },
  ans10:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },

});

module.exports = TestLicnosti = mongoose.model('TestLicnostis',TestLicnostiSchema);
