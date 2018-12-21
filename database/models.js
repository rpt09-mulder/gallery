const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id: Number,
  photos: [{
    id: Number,
    location: String
  }]
});

module.exports = {
  Property: mongoose.model('Property', PropertySchema)
};