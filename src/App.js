import React from 'react';
import { hot } from 'react-hot-loader/root';
import Chart from './components/chart.js';
import Title from './components/title.js';
import Details from './components/details.js';
import logo from './cryptocharts_logo.png';
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
                borderWidth: 3,
                borderColor: '#00B2EE',
                backgroundColor: '#b4e3fe',
                pointRadius: 0,
                hoverBackgroundColor: '#00B2EE',
                pointHoverRadius: 5,
                pointBorderWidth: 0,
                pointHoverBorderWidth: 0,
                pointHoverBorderColor: '#00B2EE',
                pointHitRadius: 5,
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
        <header className="logo-wrapper">
          <img src={logo} alt="cryptocharts logo" />
        </header>
        <div className="main-content-wrapper-upper">
          <div className="details-wrapper">
            <Title />
            <Details />
          </div>
        </div>
        <div className="main-content-wrapper-lower">
          <Chart chartData={this.state.chartData} />
          <div className="source">
            <span>Powered by </span>
            <a href="https://www.coindesk.com/price/bitcoin" target="blank">
              CoinDesk
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(App);
