const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateScoreSchema = new Schema({
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

const DateScore = mongoose.model('DateScore', DateScoreSchema);

module.exports = {DateScore};
