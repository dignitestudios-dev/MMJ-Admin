import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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

type Props = {
    upper: number,
    torso: number,
    lower: number,
}

export function PieChart({ upper, torso, lower }: Props) {
    const data = {
        labels: ['Upper', 'Torso', 'Lower'],
        datasets: [
            {
                label: '# ',
                data: [upper, torso, lower],
                backgroundColor: [
                    '#8EDD11',
                    '#3787FF',
                    '#E81515'
                ],
                borderColor: [
                    '#8EDD11',
                    '#3787FF',
                    '#E81515'
                ],
                borderWidth: 1,
            },
        ]
    };
    return (
        <div className="h-56">
            <Pie data={data} options={options} />
        </div>
    );
}