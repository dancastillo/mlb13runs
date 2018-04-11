// THIS IS ONLY RAN ONCE TO LOAD ALL TEAMS IN COLLECTION
const {Team} = require('./../models/team');
const save = require('./../controllers/save');

const saveAllTeams = (name, market, abbr) => {
  save.saveTeam(name, market, abbr)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {saveAllTeams};

const teams = {
  "teams": [{
    "name": "Diamondbacks",
    "market": "Arizona",
    "abbr": "ARI",
  }, {
    "name": "Rockies",
    "market": "Colorado",
    "abbr": "COL",
  }, {
    "name": "Giants",
    "market": "San Francisco",
    "abbr": "SF",
  }, {
    "name": "Dodgers",
    "market": "Los Angeles",
    "abbr": "LAD",
  }, {
    "name": "Padres",
    "market": "San Diego",
    "abbr": "SD",
  }, {
    "name": "Pirates",
    "market": "Pittsburgh",
    "abbr": "PIT",
  }, {
    "name": "Cubs",
    "market": "Chicago",
    "abbr": "CHC",
  }, {
    "name": "Brewers",
    "market": "Milwaukee",
    "abbr": "MIL",
  }, {
    "name": "Cardinals",
    "market": "St. Louis",
    "abbr": "STL",
  }, {
    "name": "Reds",
    "market": "Cincinnati",
    "abbr": "CIN",
  }, {
    "name": "Mets",
    "market": "New York",
    "abbr": "NYM",
  }, {
    "name": "Braves",
    "market": "Atlanta",
    "abbr": "ATL",
  }, {
    "name": "Nationals",
    "market": "Washington",
    "abbr": "WSH",
  }, {
    "name": "Phillies",
    "market": "Philadelphia",
    "abbr": "PHI",
  }, {
    "name": "Marlins",
    "market": "Miami",
    "abbr": "MIA",
  }, {
    "name": "Red Sox",
    "market": "Boston",
    "abbr": "BOS",
  }, {
    "name": "Blue Jays",
    "market": "Toronto",
    "abbr": "TOR",
  }, {
    "name": "Yankees",
    "market": "New York",
    "abbr": "NYY",
  }, {
    "name": "Orioles",
    "market": "Baltimore",
    "abbr": "BAL",
  }, {
    "name": "Rays",
    "market": "Tampa Bay",
    "abbr": "TB",
  }, {
    "name": "Indians",
    "market": "Cleveland",
    "abbr": "CLE",
  }, {
    "name": "Twins",
    "market": "Minnesota",
    "abbr": "MIN",
  }, {
    "name": "Tigers",
    "market": "Detroit",
    "abbr": "DET",
  }, {
    "name": "Royals",
    "market": "Kansas City",
    "abbr": "KC",
  }, {
    "name": "White Sox",
    "market": "Chicago",
    "abbr": "CWS",
  }, {
    "name": "Astros",
    "market": "Houston",
    "abbr": "HOU",
  }, {
    "name": "Angels",
    "market": "Los Angeles",
    "abbr": "LAA",
  }, {
    "name": "Mariners",
    "market": "Seattle",
    "abbr": "SEA",
  }, {
    "name": "Athletics",
    "market": "Oakland",
    "abbr": "OAK",
  }, {
    "name": "Rangers",
    "market": "Texas",
    "abbr": "TEX",
  }]
};

const loadAllTeams = () => {
  const allTeams = teams.teams;

  allTeams.forEach((team) => {
    saveAllTeams(team.name, team.market, team.abbr);
  });
};

module.exports = {loadAllTeams};
