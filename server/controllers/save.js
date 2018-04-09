const {Team} = require('./../models/team');

const saveTeam = (name, market) => {
  const newTeam = new Team({
    name,
    market
  });

  return newTeam.save().then((team) => {
    return team;
  }).catch((err) => {
    return Promise.reject();
  });
}

module.exports = {
  saveTeam
}