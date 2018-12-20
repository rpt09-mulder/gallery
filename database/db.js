require('dotenv').config()
const mongoose = require('mongoose');
const Models = require('./models.js');
const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const utils = require('./dbUtils.js');
const _ = require('lodash');

const productionBucket = `https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-785620446758/property_images/`;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`)
.then(() => {
  console.log('Connected to DB')
},
(err) => {
  console.log(err)
})
