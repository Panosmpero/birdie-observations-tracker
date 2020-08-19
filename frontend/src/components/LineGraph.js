import React, { useEffect } from "react";
import {Line} from 'react-chartjs-2';

const LineGraph = () => {

  useEffect(() => {

  }, [])

  return (
    <div className="linegraph-container container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgb(84, 197, 193)',
      borderColor: 'rgb(0, 37, 77)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgb(84, 197, 193)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(0, 37, 77)',
      pointHoverBorderColor: 'rgb(0, 37, 77)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      // label: function (tooltipItem, data) {
      //   return numeral(tooltipItem.value).format("+0,0");
      // },
    },
  },
  scales: {
    xAxes: [
      {
        // type: "time",
        gridLines: {
          display: false,
        },
        // time: {
        //   parser: "MM/DD/YY",
        //   tooltipFormat: "ll",
        // },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          // // Include a dollar sign in the ticks
          // callback: function (value, index, values) {
          //   return numeral(value).format("0a");
          // },
        },
      },
    ],
  },
};