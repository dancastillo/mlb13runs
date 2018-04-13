const request = require('request');

const mongoose = require('./../db/mongoose');
const helpers = require('./../helpers/index');
const find = require('./find');
const update = require('./update');

/**
 * @description update runs for data in collection
 * @param {object} games 
 * @param {string} date 
 */
const saveTeamRunsData = (games, date) => {
  // home team name
  const name = games.game.home.name;
  // home team market
  const market = games.game.home.market;
  // home team runs
  const runs = games.game.home.runs;

  // away team name
  const awayName = games.game.away.name;
  // away team market
  const awayMarket = games.game.away.market;
  // away team runs
  const awayRuns = games.game.away.runs;

  const team = {
    name,
    market,
    runs
  };

  const awayTeam = {
    name: awayName,
    market: awayMarket,
    runs: awayRuns
  };

  const scores = {
    score: runs,
    date: date,
    opponent: {
      name: awayName,
      market: awayMarket,
      data: date,
      opponentScore: awayRuns
    }
  };

  const awayScores = {
    score: awayRuns,
    date: date,
    opponent: {
      name: name,
      market: market,
      data: date,
      opponentScore: runs
    }
  };

  if(team.runs < 14) {
    find.findScore(team, scores)
      .then((savedRuns) => {})
      .catch((err) => {
        console.log(`Err in Sportrader.js findScores: ${err}`);
      });
  }
    
  if (awayTeam.runs < 14) {
    find.findScore(awayTeam, awayScores)
      .then((savedRuns) => {})
      .catch((err) => {
        console.log(`Err in Sportrader.js findScores: ${err}`);
      });
  }
    
};

/**
 * @description makes call to API to get and save data
 */
const makeApiRequest = () => {
  request(helpers.apiUrl(), function (error, response, body) {
    try {
        var jsonBody = JSON.parse(body);
    
        let games = body['league']['games'];

        const date = body.league.date;

        games.forEach((games) => {
          saveTeamRunsData(games, date);
        });

    } catch (err) {
      console.log(`api error in sportrader: ${err}`);
    }  
  });
};

/**
 * @description Checks if api was already checked for yesterdays date
 */
const getDataFromAPI = () => {
  
  const yesterdayDate = helpers.getDateFormat()
  
  find.isTodaysRunsSaved(yesterdayDate).then((isTodaysRunsSaved) => {
    
    if (!isTodaysRunsSaved) {
      makeApiRequest();

      update.updateDateRetrieved(yesterdayDate)
        .then((date) => {})
        .catch((err) => {
          return Promise.reject(err);
        });
    }

  }).catch((err) => {
    console.log(`Error in getData from API`);
  });
};

module.exports = {getDataFromAPI};