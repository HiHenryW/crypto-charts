import React from 'react';
import { hot } from 'react-hot-loader/root';
import Chart from './components/chart.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'test',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
    };
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
