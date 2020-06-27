import React from 'react';
import { hot } from 'react-hot-loader/root';
import Chart from './components/chart.js';
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: [],
        datasets: [],
      },
    };

    this.getHistoricalData = this.getHistoricalData.bind(this);
  }

  componentDidMount() {
    this.getHistoricalData();
  }

  getHistoricalData() {
    axios
      .get('http://localhost:3000/historicalprices')
      .then((res) => {
        let dateLabels = [];
        let datapoints = [];
        res.data.forEach((item) => {
          dateLabels.push(item.onDate);
          datapoints.push(item.closingPrice);
        });
        this.setState({
          chartData: {
            labels: dateLabels,
            datasets: [
              {
                label: 'BTC',
                borderWidth: 2,
                data: datapoints,
              },
            ],
          },
        });
        // console.log('state: ', this.state);
      })
      // .then(() => {
      //   console.log(this.state.chartData);
      // })
      .catch((err) => {
        console.log('err in getHistoricalData: ', err);
      });
  }

  render() {
    return (
      <div>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default hot(App);
