'use client';
import { Humidity } from '@/types/types';
import { CategoryScale } from 'chart.js';
import 'chart.js/auto';
import Chart from 'chart.js/auto';

import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);
const formatToAmPm = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

const BubbleChart = ({ data }: { data: Humidity[]; }) => {
    const bubbleData = data.map((data) => ({
        x: formatToAmPm(data.createdAt),
        y: data.humidity,
    }));

    const apiData = {
        datasets: [
            {
                label: 'Humidity vs Time',
                data: bubbleData,
                backgroundColor: '#008A09',
            },
        ],
    };

    return (


        <Line
            data={apiData}
            options={{
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time (AM/PM)',
                        },
                        type: 'category',


                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Humidity (%)',
                        },
                        beginAtZero: true,
                        max: 100,
                    }
                }
            }}
        />);
};

export default BubbleChart;
