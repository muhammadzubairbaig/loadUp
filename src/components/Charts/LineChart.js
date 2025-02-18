import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "utils/charts"; // Import chart data and options

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state to hold chart data and options
    this.state = {
      chartData: [], // Holds the series data for the chart
      chartOptions: {}, // Holds the configuration options for the chart
    };
  }

  componentDidMount() {
    // Set chart data and options once the component is mounted
    this.setState({
      chartData: lineChartData, // Data to be displayed in the chart
      chartOptions: lineChartOptions, // Configuration options for the chart (e.g., axes, legends)
    });
  }

  render() {
    return (
      // Render the ApexCharts component with the data and options from the state
      <ReactApexChart
        options={this.state.chartOptions} // Chart configuration options
        series={this.state.chartData} // Chart series data
        type="area" // Chart type (area chart in this case)
        width="100%" // Full width of the container
        height="100%" // Full height of the container
      />
    );
  }
}

export default LineChart;
