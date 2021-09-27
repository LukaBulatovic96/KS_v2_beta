const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Company Schema

const CompanySchema = new Schema({
  name:{
    type: String,
    required: true
  },
  userId: [{
    type: String
  }],
});

module.exports = Company = mongoose.model('company',CompanySchema);
