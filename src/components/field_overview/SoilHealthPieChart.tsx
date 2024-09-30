'use client';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);
export default function SoilHealthPieChart() {

    const data = {
        labels: [
            'Green 705',
            'Light Green',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                '#008A09',
                '#C4D9C8',
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className='flex justify-center'>
            <div className='w-[300px]'>
                <Pie data={data} />
            </div>
        </div>
    );
}
