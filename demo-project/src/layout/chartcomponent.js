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
// ----------------------------
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Register necessary components and plugins with ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.allUsers);
//   const { error, loading, user, isAuthenticated } = useSelector(
//     (state) => state.user
//   );

//   // Ensure the chart data uses default values if user is undefined
//   const chartlistdata = [
//     user?.followers?.length || 0,
//     user?.following?.length || 0,
//     10,
//     8,
//   ];

//   const [chartData, setChartData] = useState({
//     labels: [
//       "Followers",
//       "Non-Followers",
//       "Search Appearances",
//       "Post Impression",
//     ],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false, // Hides the legend at the top
//       },
//       title: {
//         display: true,
//         text: "User Engagement Chart", // Title of the chart
//       },
//       datalabels: {
//         color: "black", // Text color for labels
//         formatter: (value, ctx) => {
//           let sum = 0;
//           const dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.forEach((data) => {
//             sum += data;
//           });
//           const percentage = ((value * 100) / sum).toFixed(2) + "%";
//           const labelName = ctx.chart.data.labels[ctx.dataIndex]; // Get the name
//           return `${labelName}: ${percentage}`; // Combine name and percentage
//         },
//         anchor: "end", // Position text at the end of the segment
//         align: "center", // Align text outside the segment
//         offset: 30, // Increase distance from the segment

//         font: {
//           size: 10, // Adjust font size
//           weight: "bold", // Make the text bold
//         },

//         clip: false, // Ensures text is not clipped
//       },
//     },
//   };

//   return (
//     <div
//       className="chart-graph"
//       style={{ width: "300px", height: "300px", marginTop: "50px" }}
//     >
//       <Doughnut data={chartData} options={options} />
//     </div>
//   );
// }

// --------------------
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Register necessary components and plugins with ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.allUsers);
//   const { error, loading, user, isAuthenticated } = useSelector(
//     (state) => state.user
//   );

//   // Ensure the chart data uses default values if user is undefined
//   const chartlistdata = [
//     user?.followers?.length || 0,
//     user?.following?.length || 0,
//     10,
//     8,
//   ];

//   const total = chartlistdata.reduce((acc, value) => acc + value, 0);

//   const [chartData, setChartData] = useState({
//     labels: [
//       "Followers",
//       "Non-Followers",
//       "Total Search Appearance",
//       "Total Post Impression",
//     ],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(138, 43, 226)", // Custom color for consistency with the style
//           "rgb(255, 215, 0)",
//           "rgb(255, 69, 0)",
//           "rgb(0, 0, 255)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     cutout: "70%", // Creates the inner cutout for the central text
//     plugins: {
//       legend: {
//         display: false, // Hides the legend at the top
//       },
//       title: {
//         display: false, // Disable the title for cleaner design
//       },
//       datalabels: {
//         color: "#000", // Black color for text
//         formatter: (value, ctx) => {
//           let sum = 0;
//           const dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.forEach((data) => {
//             sum += data;
//           });
//           const percentage = ((value * 100) / sum).toFixed(1) + "%";
//           return `${percentage}`;
//         },
//         anchor: "end",
//         align: "end",
//         offset: 30,
//         font: {
//           size: 30, // Slightly larger text for better readability
//           weight: "bold",
//         },
//         clip: false,
//       },
//       tooltip: {
//         enabled: false, // Disables the tooltip for a cleaner look
//       },
//     },
//   };

//   return (
//     <div className="chart-graph" style={{ position: "relative", width: "50%" }}>
//       <Doughnut data={chartData} options={options} />
// <div
//   style={{
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#000", // Black color for the central text
//   }}
// >
//   {total}
// </div>
//     </div>
//   );
// }
// ------------------

// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./ChartComponent.css"; // Import the CSS file

// // Register necessary components and plugins with ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.allUsers);
//   const { error, loading, user, isAuthenticated } = useSelector(
//     (state) => state.user
//   );

//   // Ensure the chart data uses default values if user is undefined
//   const chartlistdata = [
//     user?.followers?.length || 0,
//     user?.following?.length || 0,
//     10,
//     8,
//   ];

//   const total = chartlistdata.reduce((acc, value) => acc + value, 0);

//   const [chartData, setChartData] = useState({
//     labels: [
//       "Followers",
//       "Non-Followers",
//       "Total Search Appearance",
//       "Total Post Impression",
//     ],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(138, 43, 226)", // Custom color for consistency with the style
//           "rgb(255, 215, 0)",
//           "rgb(255, 69, 0)",
//           "rgb(0, 0, 255)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     cutout: "70%", // Creates the inner cutout for the central text
//     plugins: {
//       legend: {
//         display: false, // Hides the legend at the top
//       },
//       title: {
//         display: false, // Disable the title for cleaner design
//       },
//       datalabels: {
//         color: "#000", // Black color for text
//         formatter: (value, ctx) => {
//           const percentage = ((value * 100) / total).toFixed(1) + "%";
//           const labelName = ctx.chart.data.labels[ctx.dataIndex]; // Get the label name
//           return `${labelName}: ${percentage}`;
//         },
//         anchor: "end",
//         align: "end",
//         offset: 20, // Increased offset to move the labels further away from the chart
//         font: {
//           size: 14, // Slightly larger text for better readability
//           weight: "bold",
//         },
//         backgroundColor: "rgba(255, 255, 255, 0.8)",
//         borderColor: "#000",
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 5,
//         textAlign: "center",
//         clip: false,
//       },
//       tooltip: {
//         enabled: false, // Disables the tooltip for a cleaner look
//       },
//     },
//   };

//   return (
//     <div className="chart-container">
//       <Doughnut data={chartData} options={options} />
//       <p>message</p>
//       <p>message</p>
//       <p>message</p>
//       <div className="chart-center-text">{total}</div>
//     </div>
//   );
// }

// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Register necessary components and plugins with ChartJS
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.allUsers);
//   const { error, loading, user, isAuthenticated } = useSelector(
//     (state) => state.user
//   );

//   // Ensure the chart data uses default values if user is undefined
//   const chartlistdata = [
//     user?.followers?.length || 0,
//     user?.following?.length || 0,
//     10,
//     8,
//   ];

//   const [chartData, setChartData] = useState({
//     labels: [
//       "Followers",
//       "Non-Followers",
//       "Search Appearances",
//       "Post Impression",
//     ],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         top: 20, // Increase top padding to make room for the title
//         bottom: 20, // Add padding at the bottom if needed
//         left: 50, // Add padding on the left side
//         right: 50, // Add padding on the right side
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, // Hides the legend at the top
//       },
//       title: {
//         display: true,
//         text: "User Engagement Chart", // Title of the chart
//         font: {
//           size: 16, // Adjust font size
//           weight: "bold",
//         },
//         padding: {
//           bottom: 20, // Add padding below the title
//         },
//       },
//       datalabels: {
//         color: "black", // Text color for labels
//         formatter: (value, ctx) => {
//           let sum = 0;
//           const dataArr = ctx.chart.data.datasets[0].data;
//           dataArr.forEach((data) => {
//             sum += data;
//           });
//           const percentage = ((value * 100) / sum).toFixed(2) + "%";
//           const labelName = ctx.chart.data.labels[ctx.dataIndex]; // Get the name
//           return `${labelName}: ${percentage}`; // Combine name and percentage
//         },
//         anchor: "end", // Position text at the end of the segment
//         align: "end", // Align text outside the segment
//         offset: 20, // Increase distance from the segment
//         font: {
//           size: 12, // Adjust font size
//           weight: "bold", // Make the text bold
//         },
//         clip: false, // Ensures text is not clipped
//       },
//     },
//   };

//   return (
//     <div className="chart-graph" style={{ width: "300px", height: "300px" }}>
//       <Doughnut data={chartData} options={options} />
//     </div>
//   );
// }

// ------------------------------

// import React, { useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// export default function ChartComponent() {

//   const user = {
//     followers: { length: 10 },
//     following: { length: 15 },
//   };

//   const chartlistdata = [
//     user.followers.length,
//     user.following.length,
//     20, // Search Appearances
//     25, // Post Impressions
//   ];

//   const total = chartlistdata.reduce((acc, value) => acc + value, 0);

//   const [chartData, setChartData] = useState({
//     labels: ["Followers", "Following", "Search Appearances", "Post Impression"],
//     datasets: [
//       {
//         data: chartlistdata,
//         backgroundColor: [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(255, 205, 86)",
//           "rgb(75, 192, 192)",
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         top: 20,
//         bottom: 20,
//         left: 20,
//         right: 20,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: true,
//         text: "User Engagement Chart",
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         padding: {
//           bottom: 20,
//         },
//       },
//       datalabels: {
//         color: "white",
//         font: {
//           weight: "bold",
//           size: 12,
//         },
//         formatter: (value, ctx) => {
//           const dataset = ctx.chart.data.datasets[0];
//           const sum = dataset.data.reduce((a, b) => a + b, 0);
//           const percentage = ((value / sum) * 100).toFixed(1) + "%";
//           return ctx.chart.data.labels[ctx.dataIndex] + "\n" + percentage;
//         },
//         textAlign: "center",
//         display: "auto",
//         clip: false,
//       },
//     },
//   };

//   return (
//     <div
//       className="chart-container"
//       style={{ width: "400px", height: "400px", margin: "auto" }}
//     >
//       <Doughnut data={chartData} options={options} />
// <div
//   style={{
//     position: "absolute",
//     top: "39%",
//     left: "75%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "36px",
//     fontWeight: "bold",
//     color: "#000", // Black color for the central text
//   }}
// >
//   {total}
// </div>
//     </div>
//   );
// }
// -----------------------

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ChartComponent() {
  // Simulated user data (replace with your actual data source)
  const user = {
    followers: { length: 10 },
    following: { length: 15 },
  };

  const chartlistdata = [
    user.followers.length,
    user.following.length,
    20, // Search Appearances
    25, // Post Impressions
  ];
  const total = chartlistdata.reduce((acc, value) => acc + value, 0);

  const [chartData, setChartData] = useState({
    labels: [
      "Followers",
      "Following",
      "Search Appearances",
      "Post Impressions",
    ],
    datasets: [
      {
        data: chartlistdata,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        hoverOffset: 4,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
        text: "User Engagement Chart",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          bottom: 30,
        },
      },
      datalabels: {
        color: "black",
        font: {
          weight: "bold",
          size: 9,
        },
        formatter: (value, ctx) => {
          const dataset = ctx.chart.data.datasets[0];
          const sum = dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(1) + "%";
          return ctx.chart.data.labels[ctx.dataIndex] + ": " + percentage;
        },
        anchor: "end",
        align: "end",
        offset: 10,
        display: "auto",
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{ width: "450px", height: "330px", margin: "auto" }}
    >
      <Doughnut data={chartData} options={options} />
      <div
        style={{
          position: "absolute",
          top: "38.3%",
          left: "78%",
          transform: "translate(-50%, -50%)",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#000", // Black color for the central text
        }}
      >
        {total}
      </div>
    </div>
  );
}
