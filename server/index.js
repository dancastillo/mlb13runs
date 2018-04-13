const env = require('dotenv').config();

const express = require('express');
const mongoose = require('./db/mongoose');

const schedule = require('./helpers/schedule');
const {routes} = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;;

routes(app);

app.listen(port, () => console.log(`listening on port: ${port}`));