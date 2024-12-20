'use client';

import axios from 'axios';
import {
  CategoryScale,
  ChartData,
  LineElement,
  LinearScale,
  PointElement,
} from 'chart.js';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { latitude, longitude } from '../../datacenter/LocationTrack';
Chart.register(CategoryScale, LineElement, LinearScale, PointElement);

interface FloodData {
  daily: { time: string[]; river_discharge: number[]; };
}

const FloodChart = ({
  setRiverDischargeFloor,
}: {
  setRiverDischargeFloor: (discharge: number[]) => void;
}) => {
  const [floodData, setFloodData] = useState<FloodData | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://flood-api.open-meteo.com/v1/flood?latitude=${latitude}&longitude=${longitude}&daily=river_discharge
`
      )
      .then((response) => {
        setFloodData(response.data);
        setRiverDischargeFloor(response.data?.daily?.river_discharge);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setRiverDischargeFloor]);

  // console.log(floodData)
  const data: ChartData<'line' | 'bar', number[], string> = {
    labels: floodData?.daily?.time,
    datasets: [
      {
        label: 'River Discharge(m³/s)',
        data: floodData?.daily?.river_discharge || [],
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
        max: 15,
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
    <div className="mt-5">
      <Line
        data={data as ChartData<'line', number[], string>} //+
        options={options}
      />
    </div>
  );
};

export default FloodChart;
