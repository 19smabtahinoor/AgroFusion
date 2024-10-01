'use client';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Bubble } from 'react-chartjs-2';

Chart.register(CategoryScale);
export default function HumidityBubbleChart() {
    const data = {
        datasets: [{
            label: 'First Dataset',
            data: [
                {
                    x: 2,
                    y: 30,
                    r: 15
                },
                {
                    x: 50,
                    y: 2,
                    r: 15
                },
                {
                    x: 20,
                    y: 3,
                    r: 15
                },
                {
                    x: 20,
                    y: 4,
                    r: 15
                },
                {
                    x: 20,
                    y: 5,
                    r: 15
                },
            ],
            backgroundColor: '#008A09'
        }]
    };

    return (
        <div >
            <Bubble
                data={data}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            max: 5,
                            ticks: {
                                stepSize: 1

                            }
                        },
                        y: {
                            max: 200,
                            ticks: {
                                stepSize: 50
                            }
                        }
                    }
                }}
            />
        </div>
    );
}
