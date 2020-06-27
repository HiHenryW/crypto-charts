import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidUpdate(prevProps) {
    // console.log('this.props.chartData: ', this.props.chartData);
    if (this.props.chartData !== prevProps.chartData) {
      console.log('this.props.chartData: ', this.props.chartData);
      console.log('prevProps: ', prevProps);
      this.updateChart(this.props.chartData);
    }
  }

  updateChart(data) {
    this.setState({
      chartData: data,
    });
    // console.log('updateChart ran, state: ', this.state);
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          // height={50}
          options={{
            // responsive: true,
            // maintainAspectRatio: false,
            title: {
              display: false,
              text: 'Bitcoin Historical Prices',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
