const {Team} = require('./../models/team');
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

module.exports = {
  findTeam
}