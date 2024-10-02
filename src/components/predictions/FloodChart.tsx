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


interface FloodChartProps {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  floodData: any;

}


const FloodChart: React.FC<FloodChartProps> = ({ floodData }) => {
    // console.log(floodData)
  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: floodData?.daily?.time,
    datasets: [
      {
        label: 'River Discharge(m³/s)',
        data: floodData?.daily?.river_discharge,
        fill: false,
        borderColor: '#008A09',
        pointBorderWidth: 5,
        tension: 0.1,
      },
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
        max: 300,
        ticks: {
          stepSize: 5,
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

export default FloodChart;