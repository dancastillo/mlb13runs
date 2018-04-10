const hbs = require('hbs');
const path = require('path');

const get = require('./get');

const routes = (app) => {

  app.set('views engine', 'hbs');
  app.set('views', path.join(__dirname, './../../public/views'));

  app.get('*', get.getHome);
};

module.exports = {routes};