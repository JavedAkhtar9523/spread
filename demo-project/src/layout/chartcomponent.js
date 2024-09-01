
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { useEffect } from 'react';

// // Register necessary components and plugins with ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function ChartComponent() {
//   // Data for the doughnut chart
//   const data = {
//     labels: ['Followers', 'None-Followers', 'Search Appearances',],
//     datasets: [
//       {
        
//         data: [300, 50, 100],
//         backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(54, 162, 235)',
//           'rgb(255, 205, 86)',
//         ],
//         name: {
//             color: "black",
//             backgroundColor: "white",
//             font: {
//                 size: 16
//             }
//         },
//         hoverOffset: 4, // Optional: Offset when hovering over a slice
//       },
//     ],
//   };

//   // Options for the doughnut chart
//   const options = {
//     responsive: true,
//     plugins: {
      
//       title: {
//         display: true,
//         text: 'Chart.js Doughnut Chart', // Title of the chart
//       },
//     },
//   };


//   // Render the Doughnut chart with the given data and options
//   return <Doughnut data={data} options={options} />;
// }


import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Register necessary components and plugins with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ChartComponent() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const { error, loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  // Ensure the chart data uses default values if user is undefined
  const chartlistdata = [
    user?.followers?.length || 0,
    user?.following?.length || 0,
    10,
    8
  ];

  const [chartData, setChartData] = useState({
    labels: ['Followers', 'Non-Followers', 'Search Appearances', 'Post Impression'],
    datasets: [
      {
        data: chartlistdata,
        backgroundColor: [
          'rgb(255, 99, 132)', 
          'rgb(54, 162, 235)', 
          'rgb(255, 205, 86)', 
          'rgb(75, 192, 192)' 
        ],
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend at the top
      },
      title: {
        display: true,
        text: 'User Engagement Chart', // Title of the chart
      },
      datalabels: {
        color: 'black', // Text color for labels
        formatter: (value, ctx) => {
          let sum = 0;
          const dataArr = ctx.chart.data.datasets[0].data;
          dataArr.forEach((data) => {
            sum += data;
          });
          const percentage = ((value * 100) / sum).toFixed(2) + "%";
          const labelName = ctx.chart.data.labels[ctx.dataIndex]; // Get the name
          return `${labelName}: ${percentage}`; // Combine name and percentage
        },
        anchor: 'end', // Position text at the end of the segment
        align: 'center', // Align text outside the segment
        offset: 15, // Increase distance from the segment
        
        font: {
          size: 12, // Adjust font size
          weight: 'bold', // Make the text bold
        },
       
      
        clip: false, // Ensures text is not clipped
      },
    },
  };

  return (
    <div className='chart-graph'>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
