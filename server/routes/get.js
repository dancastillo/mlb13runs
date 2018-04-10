const find = require('./../controllers/find');

/**
 * Route users to home page with data from collection about teams
 * @param {object} req 
 * @param {object} res 
 */
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