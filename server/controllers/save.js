const mongoose = require('./../db/mongoose');
const {Team} = require('./../models/team');

/**
 * Save a team to the collections
 * @param {string} name 
 * @param {string} market 
 * @param {string} abbr 
 */
const saveTeam = (name, market, abbr) => {
  const newTeam = new Team({
    name,
    market,
    abbr
  });

  return newTeam.save().then((team) => {
    return team;
  }).catch((err) => {
    return Promise.reject(err);
  });
};

module.exports = {
  saveTeam
};