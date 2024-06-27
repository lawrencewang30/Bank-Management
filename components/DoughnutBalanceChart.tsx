'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutBalanceChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1300, 2600, 4670],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }


  return (
      <Doughnut 
      data={data}
      options={{
        cutout: '50%', // slimness of pie chart
        plugins: {
          legend: {
            display: false // remove legend next to chart
          }
        }
      }}/>
  )
}

export default DoughnutBalanceChart
