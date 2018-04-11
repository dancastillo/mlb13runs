const {Team} = require('./../models/team');
const {DateScore} = require('./../models/dateScore');
const save = require('./save');
const update = require('./update');

/**
 * @description find team based on name and market
 * @param {string} name 
 * @param {string} market 
 */
const findTeam = (name, market) => {
  return Team.findOne({
    name,
    market
  }).then((team) => {
    // if team doesnt exist save team to collection
    if (!team || team.length === 0) { 
      return save.saveTeam(name, market).then((team) => {
        return team;
      }).catch((err) => {
        return Promise.reject();
      });
    }
    return team;
  }).catch((err) => {
    return Promise.reject();
  });
};

const findAllTeams = () => {
  return Team.find().then((teams) => {
    return teams;
  }).catch((err) => {
    return Promise.reject();
  });
};

/**
 * Checks if date data/runs have been updated
 * @param {string} date 
 * @return {boolean} if date was in use
 *          true - then NEED TO update collection
 *          falses - data has ALREADY been updated
 */
const isDataUsed = (date) => {
  return DateScore.findOne({
    date
  }).then((date) => {
    // if date doesnt exist
    // false means runs for date havent been updated
    if (!date) {
      return false;
    }

    // if date.retrieved is false
    // false means runs for date havent been updated
    if (!date.retrieved) {
      return false;
    }

    return true;
  }).catch((err) => {
    return Promise.reject();
  });
};

/**
 * @description Find the score if it was updated 
 * @param {object} team 
 * @param {object} score 
 */
const findScore = (team, score) => {
  const teamRuns = team.runs;
  return Team.findOne({
    name: team.name,
    market: team.market,
  }).then((team) => {
    if (!team) {
      return Promise.reject(team);
    }

    if (team.runs !== undefined && team.runs.includes(teamRuns)) {
      // run has already been accounted for
      return team;
    } else {
      // run hasnt been accounted for 
      // update document with run information
      return update.updateScores(team, score).then((team) => {
        // console.log(team);
        return team;
      }).catch((err) => {
        return Promise.reject(err);
      })
    }
  }).catch((err) => {
    return Promise.reject(err);
  });
}

module.exports = {
  findTeam,
  findAllTeams,
  isDataUsed,
  findScore
};