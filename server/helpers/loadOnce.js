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
// sportrader.getDataFromAPI();


