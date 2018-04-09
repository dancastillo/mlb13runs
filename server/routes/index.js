const hbs = require('hbs');
const path = require('path');

const routes = (app) => {

  app.set('views engine', 'hbs');
  app.set('views', path.join(__dirname, './../../public/views'));

  app.get('/', (req, res) => {
    res.render('home.hbs');
  });
};

module.exports = {routes};