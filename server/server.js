const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3002;
const dbUtils = require('../database/dbUtils.js')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use(cors());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/photos/:id', (req, res) => {
  dbUtils.queryPhotos();
  res.json({
    photo1: req.params.id
  })
});