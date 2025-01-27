// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for categories: Spending vs Budget
  const data = {
    labels: ['Food', 'Entertainment', 'Utilities', 'Transportation', 'Healthcare'], // Categories
    datasets: [
      {
        label: 'Budget',
        data: [500, 300, 200, 150, 100], // Budget for each category
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Budget bar color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Spending',
        data: [450, 200, 180, 120, 90], // Spending for each category
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Spending bar color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options to customize the look
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Spending vs Budget by Category',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount ($)',
        },
      },
    },
  };

  return (
    <div className='linebar'>
      <Bar data={data} options={options} />
    </div>
  );
};



export default BarChart;