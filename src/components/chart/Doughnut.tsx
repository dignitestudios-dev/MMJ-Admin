import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: "top" as const,
      align: "center" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        boxHeight: 20,
        padding: 20,
        color: "#000", // Set the legend text color to white
      },
    },
    title: {
      display: false,
      color: "white", // Set the chart title text color to white
    },
  }
}

export function DoughnutChart({ female, male }: { female: number, male: number }) {
  const data = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: '#',
        data: [female, male],
        backgroundColor: [
          '#8EDD11',
          '#3787FF'
        ],
        borderColor: [
          '#8EDD11',
          '#3787FF'
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="h-56">
      <Doughnut data={data} options={options} />
    </div>
  );
}
