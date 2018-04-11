const mongoose = require('./../db/mongoose');
const {Team} = require('./../models/team');
const {Day} = require('./../models/day');

/**
 * @description Updates scores based on team
 * @param {object} team 
 * @param {object} scores 
 */
const updateScores = (team, scores) => {
  return Team.findOneAndUpdate({
    name: team.name,
    market: team.market,
    abbr: team.abbr
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
    return Promise.reject();
  });
};

/**
 * 
 * @param {string} date
 * @return Returns data object
 */
const updateDateRetrieved = (date) => {
  return Day.findOneAndUpdate({
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

module.exports = {updateScores};