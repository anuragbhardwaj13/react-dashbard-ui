import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  radius: 44,
  responsive: true,
  rotation: -180,
};
export const data = {
  labels: ["Basic Tees", "Super Hoodies", "Custom Short Pants"],
  datasets: [
    {
      data: [55, 14, 31],
      backgroundColor: [
        "rgb(134 ,239 ,172)",
        "rgb(252, 165, 165)",
        "rgb(253 ,224, 71)",
      ],
      borderWidth: 0,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="h-32 w-32 m-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
