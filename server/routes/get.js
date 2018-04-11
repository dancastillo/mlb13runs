const find = require('./../controllers/find');
const sportrader = require('./../controllers/sportrader')
/**
 * Route users to home page with data from collection about teams
 * @param {object} req 
 * @param {object} res 
 */
const getHome = (req, res) => {
  // make sure data has been updated
  sportrader.getDataFromAPI;

  // get all teams and data
  find.findAllTeams().then((teams) => {
    res.render('home.hbs', {
      teams: teams
    });
  }).catch((err) => {
    res.status(400).send(err);
  });
};

module.exports = {getHome};