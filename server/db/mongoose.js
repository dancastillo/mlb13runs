const mongoose = require('mongoose');

const PROD_MONGODB = process.env.PROD_MONGODB;

mongoose.connect(PROD_MONGODB, {}).then(() => {
  console.log('connected to mongodb');
}, (err) => {
  console.log(err);
});

module.exports = {mongoose};