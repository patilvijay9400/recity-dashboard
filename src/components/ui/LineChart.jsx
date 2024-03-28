import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const LineChart = () => {
  useEffect(() => {
    // Define your chart options
    const options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Material Data'
      },
      xAxis: {
        categories: ['Material 1', 'Material 2', 'Material 3', 'Material 4']
      },
      series: [{
        name: 'Inward',
        data: [40, 15, 25, 38]
      },
      {
        name: 'Outward',
        data: [28, 25, 50, 35]
      }]
    };

    // Create the chart
    Highcharts.chart('line-chart-container', options);
  }, []); 

  return (
    <div id="line-chart-container" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default LineChart;
