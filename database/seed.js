const { db, HistoricalPrices } = require('./schema.js');

const seedBTCPrices = {
  bpi: {
    '2020-01-01': 7188.4633,
    '2020-01-02': 6961.5683,
    '2020-01-03': 7346.58,
    '2020-01-04': 7355.855,
    '2020-01-05': 7356.3117,
    '2020-01-06': 7761.825,
    '2020-01-07': 8157.7617,
    '2020-01-08': 8042.8733,
    '2020-01-09': 7816.9233,
    '2020-01-10': 8189.265,
    '2020-01-11': 8016.4267,
    '2020-01-12': 8178.8833,
    '2020-01-13': 8105.4783,
    '2020-01-14': 8807.4267,
    '2020-01-15': 8808.4867,
    '2020-01-16': 8716.9133,
    '2020-01-17': 8890.25,
    '2020-01-18': 8901.17,
    '2020-01-19': 8698.5717,
    '2020-01-20': 8631.2883,
    '2020-01-21': 8727.6033,
    '2020-01-22': 8661.01,
    '2020-01-23': 8392.145,
    '2020-01-24': 8436.49,
    '2020-01-25': 8337.1017,
    '2020-01-26': 8602.7417,
    '2020-01-27': 8901.5067,
    '2020-01-28': 9393.2733,
    '2020-01-29': 9290.46,
    '2020-01-30': 9508.725,
    '2020-01-31': 9346.1333,
    '2020-02-01': 9388.6617,
    '2020-02-02': 9333.08,
    '2020-02-03': 9291.6433,
    '2020-02-04': 9175.3367,
    '2020-02-05': 9613.4033,
    '2020-02-06': 9750.5467,
    '2020-02-07': 9808.5967,
    '2020-02-08': 9897.6583,
    '2020-02-09': 10161.2833,
    '2020-02-10': 9852.7183,
    '2020-02-11': 10266.1,
    '2020-02-12': 10347.9517,
    '2020-02-13': 10230.0783,
    '2020-02-14': 10356.7567,
    '2020-02-15': 9903.0217,
    '2020-02-16': 9926.2,
    '2020-02-17': 9706.08,
    '2020-02-18': 10185.8767,
    '2020-02-19': 9593.48,
    '2020-02-20': 9607.31,
    '2020-02-21': 9695.5583,
    '2020-02-22': 9667.8433,
    '2020-02-23': 9973.2733,
    '2020-02-24': 9664.6333,
    '2020-02-25': 9313.92,
    '2020-02-26': 8790.12,
    '2020-02-27': 8816.585,
    '2020-02-28': 8715.6617,
    '2020-02-29': 8538.3983,
    '2020-03-01': 8540.2567,
    '2020-03-02': 8926.2517,
    '2020-03-03': 8768.18,
    '2020-03-04': 8767.8867,
    '2020-03-05': 9073.275,
    '2020-03-06': 9165.1517,
    '2020-03-07': 8905.9517,
    '2020-03-08': 8050.1883,
    '2020-03-09': 7944.45,
    '2020-03-10': 7899.2267,
    '2020-03-11': 7951.17,
    '2020-03-12': 4914.085,
    '2020-03-13': 5629.5767,
    '2020-03-14': 5182.3217,
    '2020-03-15': 5360.06,
    '2020-03-16': 5043.6783,
    '2020-03-17': 5337.0933,
    '2020-03-18': 5411.6217,
    '2020-03-19': 6180.27,
    '2020-03-20': 6206.6117,
    '2020-03-21': 6197.6183,
    '2020-03-22': 5803.67,
    '2020-03-23': 6492.94,
    '2020-03-24': 6766.7817,
    '2020-03-25': 6687.705,
    '2020-03-26': 6709.95,
    '2020-03-27': 6698.73,
    '2020-03-28': 6226.545,
    '2020-03-29': 5882.0067,
    '2020-03-30': 6568.805,
    '2020-03-31': 6449.95,
    '2020-04-01': 6671.95,
    '2020-04-02': 6833.05,
    '2020-04-03': 6740.075,
    '2020-04-04': 6872.915,
    '2020-04-05': 6778.61,
    '2020-04-06': 7297.75,
    '2020-04-07': 7360.37,
    '2020-04-08': 7341.15,
    '2020-04-09': 7314.95,
    '2020-04-10': 6909.95,
    '2020-04-11': 6814.05,
    '2020-04-12': 7143.45,
    '2020-04-13': 6763.065,
    '2020-04-14': 6885.1,
    '2020-04-15': 6727.15,
    '2020-04-16': 7055.8225,
    '2020-04-17': 7086.85,
    '2020-04-18': 7226.61,
    '2020-04-19': 7170.65,
    '2020-04-20': 6896.31,
    '2020-04-21': 6856.8,
    '2020-04-22': 7137.85,
    '2020-04-23': 7556.95,
    '2020-04-24': 7502.9,
    '2020-04-25': 7598.605,
    '2020-04-26': 7602.64,
    '2020-04-27': 7674.375,
    '2020-04-28': 7724.15,
    '2020-04-29': 8273.45,
    '2020-04-30': 8740.75,
    '2020-05-01': 8771.5725,
    '2020-05-02': 8891.445,
    '2020-05-03': 8819.01,
    '2020-05-04': 8801.36,
    '2020-05-05': 8900.3,
    '2020-05-06': 9248.9475,
    '2020-05-07': 9375.95,
    '2020-05-08': 9986.6675,
    '2020-05-09': 9740.815,
    '2020-05-10': 8465.45,
    '2020-05-11': 8857.0625,
    '2020-05-12': 8729.95,
    '2020-05-13': 9099.2,
    '2020-05-14': 9582.5825,
    '2020-05-15': 9523.595,
    '2020-05-16': 9465.05,
    '2020-05-17': 9775.125,
    '2020-05-18': 9636.55,
    '2020-05-19': 9789.75,
    '2020-05-20': 9772.205,
    '2020-05-21': 9335.15,
    '2020-05-22': 9177.8,
    '2020-05-23': 9186.8317,
    '2020-05-24': 9203.13,
    '2020-05-25': 8776.34,
    '2020-05-26': 8871.05,
    '2020-05-27': 8923.05,
    '2020-05-28': 9207.95,
    '2020-05-29': 9448.365,
    '2020-05-30': 9550.815,
    '2020-05-31': 9545.15,
    '2020-06-01': 9564.95,
    '2020-06-02': 10136.5,
    '2020-06-03': 9594.45,
    '2020-06-04': 9529.55,
    '2020-06-05': 9836.805,
    '2020-06-06': 9679.75,
    '2020-06-07': 9621.55,
    '2020-06-08': 9730.365,
    '2020-06-09': 9668.96,
    '2020-06-10': 9731.05,
    '2020-06-11': 9797.5,
    '2020-06-12': 9475.95,
    '2020-06-13': 9432.3875,
    '2020-06-14': 9421.895,
    '2020-06-15': 9137.25,
    '2020-06-16': 9490.7375,
    '2020-06-17': 9474.64,
    '2020-06-18': 9447.25,
    '2020-06-19': 9276.15,
    '2020-06-20': 9312.005,
    '2020-06-21': 9339.125,
  },
  disclaimer:
    'This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.',
  time: {
    updated: 'Jun 22, 2020 00:03:00 UTC',
    updatedISO: '2020-06-22T00:03:00+00:00',
  },
};

const insertSeedData = (data) => {
  for (let date in data) {
    let instance = new HistoricalPrices({
      onDate: date,
      closingPrice: data[date],
    });
    instance.save();
  }
};

// insertSeedData(seedBTCPrices.bpi);
