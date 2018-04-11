const request = require('request');

const mongoose = require('./../db/mongoose');
const helpers = require('./../helpers/index');
const {Team} = require('./../models/team');
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

    update.updateScores(team, scores).then((savedRuns) => {
      console.log(savedRuns);
    }).catch((err) => {
      console.log(err);
    });
    update.updateScores(team, awayScores).then((savedRuns) => {
      console.log(savedRuns);
    }).catch((err) => {
      console.log(err);
    });
}

/**
 * @description makes call to API to get and save data
 */
const makeApiRequest = () => {
  // request(helpers.apiUrl, function (error, response, body) {
    try {
      const {data} = require('./../db/data.js');
      // console.log(data)
      const body = JSON.stringify(data);
      var jsonBody = JSON.parse(body);
  
      let games = jsonBody['league']['games'];
      const date = jsonBody.league.date;
  
      let num = 1;
      games.forEach((games) => {
        saveTeamRunsData(games, date);
        num ++;
      });
  
    } catch (err) {
      console.log(`api error in sportrader: ${err}`);
    }  
  // });
}

/**
 * @description Checks if api was already checked for yesterdays date
 */
const getDataFromAPI = () => {
  const yesterdayDate = helpers.getDateFormat()

  find.isDataUsed(yesterdayDate).then((isDataUsed) => {
    makeApiRequest();
  }).catch((err) => {
    console.log(err);
  });

}

getDataFromAPI();