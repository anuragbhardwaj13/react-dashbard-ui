import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  lineTension: 0.4,
};
export const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 600 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      lineTension: 0.4,
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 100, max: 600 })),
      borderColor: "rgb(134 ,239, 172)",
      backgroundColor: "rgba(134 ,239 ,172, 0.5)",
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  return (
    <div className="bg-white mt-3 grid grid-row-2 rounded-lg h-52 p-2 mb-0.5 ">
      <div className="row-span-1">
        <h3 className="font-semibold ">Activities</h3>
        <div className="flex justify-between h-6">
          <h4 className="text-slate-500 mt-2 mb-60 text-xs flex items-center">
            May-June 2021
            <RiArrowDropDownLine className="text-sm" />
          </h4>
          <div className="flex h-fit text-xs">
            <p className="flex items-center mr-4">
              <div className="bg-red-300 h-2 w-2 rounded-full mr-3"></div>Guest
            </p>
            <p className="flex items-center mr-10">
              <div className="bg-green-300 h-2 w-2 rounded-full mr-3"></div>User
            </p>
          </div>
        </div>
      </div>

      <div className="  row-span-2 ">
        <Line
          options={options}
          data={data}
          width={"100%"}
          height={"20%"}
          className="-mt-0.5"
        />
      </div>
    </div>
  );
};
export default LineChart;
