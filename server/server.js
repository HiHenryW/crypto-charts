const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const HistoricalPrices = require('../database/schema.js');

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use(bodyParser.json());

// console.log('HistoricalPrices: ', HistoricalPrices);

// Set up routing
app.get('/historicalprices', (req, res) => {
  // console.log('app.get entered!');
  HistoricalPrices.find({})
    .sort('onDate')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log('err in app.get: ', err);
      res.sendStatus(404);
    });
});

app.post('/historicalprices', (req, res) => {
  console.log('req: ', req.body);
  let promises = [];
  let data = req.body.bpi;
  for (let date in data) {
    console.log('for loop entered!');
    promises.push(
      HistoricalPrices.findOneAndUpdate(
        { onDate: date },
        { closingPrice: data[date] },
        { upsert: true }
      ).exec()
    );
    console.log('[promises]: ', promises);
  }
  Promise.all(promises)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('err in app.post: ', err);
      res.sendStatus(404);
    });
});
