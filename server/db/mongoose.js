const mongoose = require('mongoose');

const url = process.env.DB_URI || 'mongodb://localhost:27017/mlb13runs';

mongoose.connect(url, {}).then(() => {
  console.log('connected to mongodb');
}, (err) => {
  console.log(err);
});

module.exports = {mongoose};