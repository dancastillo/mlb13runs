const {Team} = require('./../models/team');

const updateScores = (team, scores) => {
  return Team.findOneAndUpdate({
    name: team.name,
    market: team.market
  }, {
    $push: {
      scores
    }
  }).then((doc) => {
    console.log(doc);
    return doc;
  }).catch((err) => {
    return Promise.reject();
  });
}

module.exports = {updateScores};