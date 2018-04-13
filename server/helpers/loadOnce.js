const env = require('dotenv').config();
const saveDates = require('./saveDates');
const saveTeams = require('./saveTeams');
const sportrader = require('./../controllers/sportrader');

/** 
 * RUN FIRST
 */
// saveTeams.loadAllTeams();
// saveDates.loadAllDates();

/**
 * RUN AFTER
 */
sportrader.getDataFromAPI();

 const {data} = require('./../db/data.js');

data.forEach((dataObj) => {
  const games = dataObj.league.games;
  const date = dataObj.league.date;

  games.forEach((games) => {
    sportrader.saveTeamRunsData(games, date);
  });
});