const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mlb13runs';
// const url = process.env.DB_URI;

mongoose.connect(url, {}).then(() => {
  console.log('connected to mongodb');
}, (err) => {
  console.log(err);
});

module.exports = {mongoose};