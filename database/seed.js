const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery');

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id:  String,
  photos: [{ id: String, location: String }]
});

const Property = mongoose.model('Property', PropertySchema);
const db = mongoose.model('Property');

// Helpers to generate 100 records
let generateProperties = (qty) => {
  const properties = [];
  for (let i = 0; i < qty; i++) {
    const id = generateRandomId();
    const photos = generatePhotos(1);
    const property = {
      id:  '' + id,
      photos: photos
    }
    properties.push(property)
  }
  return properties;
}

let generatePhotos = (qty) => {
  const photos = [];
  for (let i = 0; i < qty; i++) {
    const id = generateRandomId();
    const location = 'https://picsum.photos/800/800/?image=172';
    const newPhoto = {
      id: '' + id,
      location: location
    }
    photos.push(newPhoto);
  }
  return photos;
}

let generateRandomId = () => {
  return Math.floor(Math.random() * 90000) + 10000;
}

// And finally, insert the records
const seedProperties = generateProperties(100);
db.insertMany(seedProperties).then(() => {
    console.log('Done insertMany');
  })
