// models/Aqi.js
const mongoose = require('mongoose');


const aqiSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Aqi', aqiSchema);
