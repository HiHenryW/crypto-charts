// Set up db connection
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/crypto-charts', (err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to mongodb!');
});

// Set up schema for historical data
const historicalPricesSchema = new mongoose.Schema({
  onDate: Date,
  closingPrice: Number,
});

// Compile schema into a model
const HistoricalPrices = mongoose.model(
  'HistoricalPrices',
  historicalPricesSchema
);

exports.db = db;
exports.HistoricalPrices = HistoricalPrices;
