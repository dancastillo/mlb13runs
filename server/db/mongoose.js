const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/13runs';

mongoose.connect(url, {}).then(() => {
  console.log('connected to mongodb');
}, (err) => {
  console.log(err);
});

module.exports = {mongoose};