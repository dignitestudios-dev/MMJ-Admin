import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
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
    },
    scales: {
        y: {
            grid: {
                offset: false,
                display: true,
            },
            ticks: {
                color: "#000", // Set the y-axis tick text color to #000
            },
        },
        x: {
            grid: {
                offset: true,
                display: false,
            },
            ticks: {
                color: "#000", // Set the x-axis tick text color to #000
            },
        },
    },
};

const labels = ['Prev', 'Current'];

interface LineChartData {
    currentMonth: number[];
    prevMonth: number[];
}

export function LineChart(data: LineChartData) {
    const lineChartData = {
        labels,
        datasets: [
            {
                label: 'Prev Month',
                data: data.prevMonth.map(i => i),
                borderColor: '#8EDD11',
                backgroundColor: '#8EDD11',
            },
            {
                label: 'Current Month',
                data: data.currentMonth.map(i => i),
                borderColor: '#3787FF',
                backgroundColor: '#3787FF',
            },
        ],
    };
    return (
        <div className="w-full">
            <Line options={options} data={lineChartData} />
        </div>
    );
}