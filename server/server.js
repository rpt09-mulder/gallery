const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3002;
const db = require('../database/db');
const dbUtils = require('../database/dbUtils');
const Models = require('../database/models')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/photos/:id', (req, res) => {
  Models.Property.find({id: req.params.id}, (err, property) => {
    if (err) {
      res.status(404).json({error: `ID ${req.params.id} does not exist in database`});
    } else {
      res.json({data: property});
    }
  });
});