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

  componentDidMount() {
    this.updateChart(this.props.chartData);
  }

  updateChart(data) {
    this.setState({
      chartData: data,
    });
  }

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          height={50}
          options={{
            // responsive: true,
            // maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Average Rainfall per month',
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
