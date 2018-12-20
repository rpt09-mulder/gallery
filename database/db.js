require('dotenv').config()
const mongoose = require('mongoose');
const Models = require('./models.js');
const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const utils = require('./dbUtils.js');
const _ = require('lodash');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`);

const db = mongoose.connection;

db.on('error', function() {
  console.log('Error connecting to DB');
});

db.once('open', function() {
  console.log('Connected to DB!');
});