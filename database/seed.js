require('dotenv').config()
const mongoose = require('mongoose');
const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const utils = require('./dbUtils.js');
const _ = require('lodash');

const productionBucket = `https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-785620446758/property_images/`;

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`);

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id: Number,
  photos: [{
    id: Number,
    location: String
  }]
});

const Property = mongoose.model('Property', PropertySchema);
const db = mongoose.model('Property');

async function generateProperties(qty) {
  try {
    const properties = [];
    for (let i = 1; i < 101; i++) {
      const photos = await generatePhotos(5);
      const property = {
        id: i,
        photos: photos
      }
      properties.push(property)
    }
    return properties;
  } catch (e) {
    console.log(e)
  }
}

async function generatePhotos(qty) {
  try {
    const photos = [];
    for (let i = 0; i < qty; i++) {
      const location = productionBucket + await utils.getFilename(`${__dirname}/downloads`);
      console.log('LOCATION:', location)
      const newPhoto = {
        id: '' + _.random(10000, 90000),
        location: location
      }
      photos.push(newPhoto);
    }
    return photos;
  } catch(e) {
    console.log(e);
  }
}

async function insertProperties() {
  const seedProperties = await generateProperties(100);
  db.insertMany(seedProperties).then(() => {
    console.log('Created Properties!');
  });
}

insertProperties();
