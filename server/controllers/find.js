const mongoose = require('./../db/mongoose');
const {Team} = require('./../models/team');
const {Day} = require('./../models/Day');
const save = require('./save');

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

/**
 * 
 */
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
  return Day.findOne({
    date
  }).then((date) => {
    // if date doesnt exist
    // false means runs for date havent been updated
    if (!date) {
      return true;
    }

    // if date.retrieved is false
    // false means runs for date havent been updated
    if (!date.retrieved) {
      return true;
    }

    return false;
  }).catch((err) => {
    return Promise.reject();
  });
};

module.exports = {
  findTeam,
  findAllTeams,
  isDataUsed
};