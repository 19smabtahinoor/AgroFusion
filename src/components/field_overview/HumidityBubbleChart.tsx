'use client';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { Bubble } from 'react-chartjs-2';
Chart.register(CategoryScale);


const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);  // Convert the date string to a Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
};

export default function HumidityBubbleChart() {

    const apiData = [
        { humidity: 50, date: 'Saturday, October 01 2024 15:48:33' },
        { humidity: 40, date: 'Sunday, October 02 2024 15:48:33' },
        { humidity: 43, date: 'Monday, October 03 2024 15:48:33' },
        { humidity: 80, date: 'Tuesday, October 04 2024 15:48:33' },
    ];

    const chartData = {
        datasets: [
            {
                label: 'Humidity Data',
                data: apiData.map(item => ({
                    x: formatDate(item.date),  // Format the date as yyyy/mm/dd
                    y: item.humidity,
                    r: 10,  // Fixed radius or dynamic
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
                                text: 'Date',
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
                    }
                }}
            />
        </div>
    );
}
