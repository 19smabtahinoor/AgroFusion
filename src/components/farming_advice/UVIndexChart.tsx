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
const UVIndexChart: React.FC<any> = ({ UVIndexData,uvindexarr }) => {

  //1-3 -=> low 
  // 3-7 => moderate
  // 7-11+ => high
  const uvindexcolor = []; 

  for (let i = 0; i < UVIndexData?.daily?.uv_index_max.length; i++) {
    const single_uv_index = UVIndexData?.daily?.uv_index_max[i];
    const check_uv_index = {
      uv: single_uv_index,
      level: single_uv_index >= 1 && single_uv_index <= 3? "Low" : single_uv_index >= 4 && single_uv_index <= 9? "Moderate" : "High",
    }
    check_uv_index?.level == 'High' ? uvindexcolor.push('#ec0000') : check_uv_index?.level == 'Moderate' ? uvindexcolor?.push('#ecca00') : uvindexcolor.push('#008A09'); 
    uvindexarr?.push(check_uv_index);
  } 
  

  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: UVIndexData?.daily?.time,
    datasets: [
      {
        type:"bar",
        label: "High UV",
        data: UVIndexData?.daily?.uv_index_max,
        backgroundColor:uvindexcolor
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