const find = require('./../controllers/find');

const getHome = (req, res) => {
  find.findAllTeams().then((teams) => {
    res.render('home.hbs', {
      teams: teams
    });
  }).catch((err) => {
    res.status(400).send(err);
  });
};

module.exports = {getHome};