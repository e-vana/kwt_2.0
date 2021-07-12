let mongoose = require('mongoose');

let athleteSchema = mongoose.Schema({
  athleteName: {
    type: String,
    required: true,
  },
  athleteShirtSize: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
  parentAddress: {
    type: String,
    required: true,
  },
  parentAddressCity: {
    type: String,
    required: true,
  },
  parentAddressState: {
    type: String,
    required: true,
  },
  parentAddressZip: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: String,
    required: true,
  },
  parentEmail: {
    type: String,
    required: true,
  },
  emergencyName: {
    type: String,
    required: true,
  },
  emergencyPhone: {
    type: String,
    required: true,
  }
})



let Athlete = module.exports = mongoose.model('Athlete', athleteSchema);