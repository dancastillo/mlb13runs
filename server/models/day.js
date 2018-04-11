const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },
  retrieved: {
    type: Boolean,
    required: true,
    default: false
  }
});

const Day = mongoose.model('Day', DaySchema);

module.exports = {Day};
