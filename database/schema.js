// Set up db connection
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/crypto-charts', (err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mongodb!');
});

// Set up schema for historical data
