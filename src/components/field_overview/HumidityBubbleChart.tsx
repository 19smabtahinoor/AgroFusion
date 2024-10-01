'use client';
import { Humidity } from '@/types/types';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bubble } from 'react-chartjs-2';

Chart.register(CategoryScale);
const formatDate = (isoDateStr: string) => {
    const date = new Date(isoDateStr);  // Convert the ISO date string to a Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};


export default function HumidityBubbleChart() {

    const apiData: Humidity[] = [
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 50, createdAt: '2024-09-25T05:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 40, createdAt: '2024-09-26T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 43, createdAt: '2024-09-27T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 80, createdAt: '2024-09-28T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 75, createdAt: '2024-09-29T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 65, createdAt: '2024-09-30T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 55, createdAt: '2024-10-01T19:37:14.867+00:00',
            updatedAt: ''
        },
        {
            _id: '66fc4f6a67c0669af3a17d56', humidity: 55, createdAt: '2024-10-02T19:37:14.867+00:00',
            updatedAt: ''
        }

    ];

    const getLastFiveDaysData = (data: Humidity[]) => {
        const today = new Date(); // Get today's date
        const fiveDaysAgo = new Date();
        fiveDaysAgo.setDate(today.getDate() - 5); // Subtract 4 days

        // Filter the data to include only the last 5 days
        return data.filter(item => {
            const itemDate = new Date(item.createdAt);
            return itemDate >= fiveDaysAgo && itemDate <= today;
        });
    };

    const lastFiveDaysData = getLastFiveDaysData(apiData);

    const chartData = {
        datasets: [
            {
                label: 'Humidity Data',
                data: lastFiveDaysData.map(item => ({
                    x: formatDate(item.createdAt),  // Format the createdAt date as yyyy/mm/dd
                    y: item.humidity,
                    r: 10,  // You can set a dynamic size or keep it fixed
                })),
                backgroundColor: '#008A09',
            },
        ],
    };



    return (
        <div >
            <Bubble
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date (YYYY/MM/DD)',
                            },
                            type: 'category',  // Use 'category' to display formatted date strings
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Humidity (%)',
                            },
                            min: 0,
                            max: 100,
                        },
                    },
                }}
            />
        </div>
    );
}
