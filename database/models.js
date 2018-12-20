const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id: Number,
  photos: [{
    id: Number,
    location: String
  }]
});

const Property = mongoose.model('Property', PropertySchema);
const PropertyModel = mongoose.model('Property');

module.exports = {
  PropertyModel: PropertyModel
};