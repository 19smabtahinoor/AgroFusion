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
                    x: 0,
                    y: 0,
                    r: 15
                },
                {
                    x: 50,
                    y: 50,
                    r: 15
                },
                {
                    x: 20,
                    y: 100,
                    r: 15
                }
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
                            max: 60,
                            ticks: {
                                stepSize: 10

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
