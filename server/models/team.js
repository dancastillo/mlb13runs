const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opponentObj = {
  name: {
    type: String,
    required: true
  },
  market: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  opponentScore: {
    type: Number,
    require: true
  }
};

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  market: {
    type: String,
    required: true
  },
  abbr: {
    type: String,
    require: true,
    unique: true
  },
  // array of runs obtained
  runs: {
    type: [Number],
    required: true,
    default: []
  },
  scores: [
    {
      // score
      score: {
        type: Number,
        required: true
      },
      // date of score
      date: {
        type: String,
        required: true
      },
      // opponent data
      opponent: opponentObj
    }
  ]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = {Team}