const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gallery');

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id:  String,
  photos: [{ id: String, location: String }]
});

const Property = mongoose.model('Property', PropertySchema);

const property1 = new Property({
  id: '3164',
  photos: [{
    id: '334824',
    location: 'http://www.thisiswherethephotogo.com'
  },
  {
    id: '0108',
    location: 'http://www.tyolo.com'
  }
]
});





property1.save().then(() => console.log('Records created'));