const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
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

const Team = mongoose.model('Team', TeamSchema);

module.exports = {Team}
