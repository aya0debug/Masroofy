import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { color } from 'chart.js/helpers';

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpensesVsIncomeChart = () => {
  // Data for the chart
  const data = {
    labels: ['Income', 'Expenses'], // Labels for the chart
    datasets: [
      {
        label: 'Amount in $',
        data: [5000, 3000], // Example data: [Income, Expenses]
        backgroundColor: ['#27296C', '#4C50D2'],
       borderColor: ['#4e9c95', '#d43f3a'],
       borderWidth: 0, // Make the border thicker
       borderRadius: 24, // Round the corners of the bars
       hoverBackgroundColor: '#6551AD', // Hover color for bars
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            color: "#6551AD", // Color for legend text
            size: 18, // Font size for the legend
            family: 'small', // Font family for the legend
            weight: 'bold', // Font weight for the legend
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optionally change the background color of the tooltip
        titleFont: {
          size: 16, // Font size for the tooltip title
          weight: 'bold', // Font weight for the tooltip title
          family: 'Arial, sans-serif', // Font family for the tooltip title
          color: '#6551AD', // Title text color
        },
        bodyFont: {
          size: 14, // Font size for the tooltip body
          family: 'Arial, sans-serif', // Font family for the tooltip body
          color: '#6551AD', // Body text color
        },
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`; // Format the label with a dollar sign
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#FFFFFF', // Color for the grid lines
          lineWidth: 1,
          borderDash: [5, 5],
        },
        ticks: {
            color:"#6551AD", 
          font: {
            color: "#6551AD", // Color for the y-axis ticks (numbers)
            size: 14, // Font size for the y-axis ticks
            family: 'small', // Font family for the y-axis ticks
          },
        },
      },
      x: {
        grid: {
          color: '#FFFFFF', // Color for the grid lines
          lineWidth: 1,
          borderDash: [5, 5],
        },
        ticks: {
            color:"#6551AD", 
          font: {
            color: "#6551AD", // Color for the x-axis ticks (numbers)
            size: 14, // Font size for the x-axis ticks
            family: 'small', // Font family for the x-axis ticks
          },
        },
      },
    },
  };
  

  return (
      <Bar data={data} options={options} />
  );
};

export default ExpensesVsIncomeChart;
