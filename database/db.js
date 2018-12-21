require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gallery');

const db = mongoose.connection;

db.on('error', function() {
  console.log('Error connecting to DB');
});

db.once('open', function() {
  console.log('Connected to DB!');
});