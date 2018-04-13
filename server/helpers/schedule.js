const schedule = require('node-schedule');
const sportrader = require('./../controllers/sportrader');

/*
NOTE: this will get the data once a day from API
*/
const getData = schedule.scheduleJob({hour: 06, minute: 30}, () => {
  sportrader.getDataFromAPI();
});