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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UVIndexChart: React.FC<any> = ({ UVIndexData }) => {

  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: UVIndexData?.daily?.time,
    datasets: [
      {
        type:"bar",
        label: 'UV Index Max',
        data: UVIndexData?.daily?.uv_index_max,
        backgroundColor:'#008A09'
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
        max: 20,
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

export default UVIndexChart;