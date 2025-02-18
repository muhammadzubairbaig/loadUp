import React, { Component } from "react";
import Chart from "react-apexcharts"; // ApexCharts library to render the chart
import { Card } from "components/Card/Card"; // Card component to wrap the chart (adjust path accordingly)
import { barChartData, barChartOptions } from "utils/charts"; // Import chart data and options

class BarChart extends Component {
  constructor(props) {
    super(props);

    // Initialize state with chart data and options
    this.state = {
      chartData: barChartData || [], // Set chart data, default to an empty array if not available
      chartOptions: barChartOptions || {} // Set chart options, default to an empty object if not available
    };
  }

  render() {
    const { chartData, chartOptions } = this.state; // Destructure state to extract chart data and options

    // If chart data is not available, display a loading message
    if (!chartData.length) {
      return <p>Loading chart...</p>;
    }

    return (
      // Wrap the chart inside a Card component with custom styles
      <Card
        py="1rem" // Add padding on the y-axis
        height={{ sm: "200px" }} // Set height for small screens
        width="100%" // Full width of the container
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)" // Background gradient for the card
        position="relative" // Positioning relative for inner elements
      >
        {/* Render the ApexChart with the provided options and series */}
        <Chart
          options={chartOptions} // Pass the chart configuration
          series={chartData} // Pass the chart data
          type="bar" // Specify the type of chart (bar chart)
          width="100%" // Full width for the chart
          height="100%" // Full height for the chart
        />
      </Card>
    );
  }
}

export default BarChart;
