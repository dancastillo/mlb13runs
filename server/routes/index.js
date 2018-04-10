const hbs = require('hbs');
const path = require('path');

const get = require('./get');

/**
 * Routing for the application
 * @param {express()} app
 */
const routes = (app) => {

  // use the hbs templating engine
  app.set('views engine', 'hbs');
  // direct express to views folder
  app.set('views', path.join(__dirname, './../../public/views'));

  // Route all get routes to home.hbs page
  app.get('*', get.getHome);
};

module.exports = {routes};