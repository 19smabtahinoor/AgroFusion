'use client';
import {
  CategoryScale,
  ChartData,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);


interface UVIndexChartProps {

    UVIndexData: any;

}


const UVIndexChart: React.FC<UVIndexChartProps> = ({ UVIndexData }) => {

    const hourlyTime = []
    for (let i = 0; i < UVIndexData.hourly.time.length; i++) {
        const date = new Date(UVIndexData?.hourly?.time[i]);
        const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
        hourlyTime.push(formattedTime)
    }


  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: hourlyTime,
    datasets: [
      {
        label: 'UV Index',
        data: UVIndexData?.hourly?.uv_index,
        fill: false,
        borderColor: '#008A09',
        pointBorderWidth: 5,
        tension: 0.1,
      }
    ],
  };


  const options = {
    responsive: true,
    scales: {
      x: {
        max: 60,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };


  return (
    <div>
      <Line
        data={data as ChartData<'line', number[], string>}//+
        options={options}
      />
    </div>
  );
};

export default UVIndexChart;