const mongoose = require('./../db/mongoose');
const {Team} = require('./../models/team');

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