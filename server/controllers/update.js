const {Team} = require('./../models/team');
const {DateScore} = require('./../models/dateScore');

/**
 * @description Updates scores based on team
 * @param {object} team 
 * @param {object} scores 
 */
const updateScores = (team, scores) => {
  return Team.findOneAndUpdate({
    name: team.name,
    market: team.market
  }, {
    $push: {
      scores: scores
    },
    $addToSet: {
      runs: scores.score
    }
  }).then((doc) => {
    return doc;
  }).catch((err) => {
    return Promise.reject(err);
  });
};

/**
 * 
 * @param {string} date
 * @return Returns data object
 */
const updateDateRetrieved = (date) => {
  return DateScore.findOneAndUpdate({
    date
  }, {
    $set: {
      retrieved: true
    }
  }).then((date) => {
    if (!date.retrieved) {
      return Promise.reject(err);
    }
    return date;
  }).catch((err) => {
    return Promise.reject(err);
  });
};

module.exports = {
  updateScores,
  updateDateRetrieved
};