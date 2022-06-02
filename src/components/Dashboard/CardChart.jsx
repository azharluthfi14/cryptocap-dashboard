import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  Tooltip,
  Filler,
  TimeScale,
  Legend,
} from "chart.js";

ChartJS.register(
  LinearScale,
  TimeScale,
  CategoryScale,
  PointElement,
  Filler,
  LineElement,
  Tooltip,
  Legend
);

const CardChart = ({ coinHistory }) => {
  const coinTimestamp = [];
  const coinPrice = [];

  let len = coinHistory?.data?.history?.length;

  for (let i = len - 1; i > 0; i--) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = len - 1; i > 0; i--) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Bitcoin(USD)",
        data: coinPrice,
        fill: false,
        backgroundColor: "#f7931a",
        borderColor: "#f7931a",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };
  return (
    <>
      <div>
        <Line height="500px" width="100%" data={data} options={options} />
      </div>
      <h1>Bitcoin price</h1>
    </>
  );
};

export default CardChart;
