/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import axios from 'axios';
import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import DroughtChart from './DroughtChart';
import FloodChart from './FloodChart';
// import FloodFetch from './FloodFetch';
// import { latitude, longitude } from '../../datacenter/LocationTrack';

interface DisastersFetchProps {
  disaster: string;
}

// interface drData {
//   daily: {
//     time: string[];
//     temperature_2m_max: number[];
//     relative_humidity_2m_max: number[];
//   };
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DisastersFetch: React.FC<DisastersFetchProps> = ({ disaster }) => {
  const [riverDischargeFlood, setRiverDischargeFloor] = useState<number[]>([]);
  // const [DroughtData, setDroughtData] = useState<drData>({
  //   daily: { time: [], temperature_2m_max: [], relative_humidity_2m_max: [] },
  // });

  const maxRiverDischarge = Math.max(...riverDischargeFlood);
  //risk changes create
  let floodriskChanges: string;
  let droughtriskChanges: string;

  //calculate the flood percentage======================

  function calculateFloodPercentage(maxRiverDischarge: number) {
    const thresholdDischarge = 200;
    const exponent = 2;

    if (maxRiverDischarge < thresholdDischarge) {
      return 0;
    }

    let floodPercentage =
      Math.pow(maxRiverDischarge / thresholdDischarge, exponent) * 10;

    // Cap the flood percentage at 100%
    if (floodPercentage > 100) {
      floodPercentage = 100;
    }

    return floodPercentage;
  }

  const floodPercentage = Math.round(
    calculateFloodPercentage(maxRiverDischarge)
  );

  // floods risk condition
  if (floodPercentage >= 0 && floodPercentage <= 40) {
    floodriskChanges = 'Safe';
  } else if (floodPercentage > 40 && floodPercentage <= 90) {
    floodriskChanges = 'Moderate';
  } else {
    floodriskChanges = 'High';
  }

  //drought =======================================

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://climate-api.open-meteo.com/v1/climate?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,relative_humidity_2m_max
  // `
  //       )
  //       .then((response) => {
  //         setDroughtData(response?.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  // const maxRelativeHumidity = DroughtData
  //   ? Math.max(...DroughtData?.daily?.relative_humidity_2m_max)
  //   : 0;
  // const maxTemp = DroughtData
  //   ? Math.max(...DroughtData?.daily?.temperature_2m_max)
  //   : 0;

  const maxTemp = 35; // in Celsius
  const maxRelativeHumidity = 30; // in percentage

  function calculateDroughtChance(
    maxTemp: number,
    maxRelativeHumidity: number
  ) {
    const maxTemperature = 50; // Assuming max temperature of 50°C
    const minTemperature = 0; // Assuming min temperature of 0°C
    const maxHumidity = 100; // Maximum possible relative humidity
    const minHumidity = 0; // Minimum possible relative humidity

    // Scale temperature and humidity
    const tempFactor =
      (maxTemp - minTemperature) / (maxTemperature - minTemperature);
    const humidityFactor =
      1 - (maxRelativeHumidity - minHumidity) / (maxHumidity - minHumidity); // Higher humidity reduces drought chance

    // Drought chance is more sensitive to low humidity and high temperatures
    let droughtChance = (tempFactor * 0.7 + humidityFactor * 0.3) * 100;

    // Ensure the chance is between 0 and 100%
    droughtChance = Math.max(0, Math.min(100, droughtChance));

    return droughtChance;
  }

  const droughtPercentage = calculateDroughtChance(
    maxTemp,
    maxRelativeHumidity
  );

  //drought risk condition
  if (droughtPercentage > 0 && droughtPercentage <= 40) {
    droughtriskChanges = 'Safe';
  } else if (droughtPercentage > 40 && droughtPercentage <= 90) {
    droughtriskChanges = 'Moderate';
  } else {
    droughtriskChanges = 'High';
  }

  //push alert
  setTimeout(() => {
    if (floodPercentage >= 90) {
      axios
        .post('/api/alert', {
          alert: `The Chances of Flood ${floodPercentage}%`,
          description: `Flood is happending soon in your area.`,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (droughtPercentage >= 90) {
      axios
        .post('/api/alert', {
          alert: `The Chances of Drought ${droughtPercentage}%`,
          description: `Drought is happending soon in your area.`,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, 21600000);

  return (
    <>
      {/* probability */}

      {disaster === 'Flood' ? (
        <div className="mt-5">
          <div
            className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${
              floodriskChanges == 'Safe'
                ? 'text-green-700 border border-green-600 bg-green-100 '
                : floodriskChanges == 'Moderate'
                ? 'border border-yellow-600 bg-yellow-100 text-yellow-700'
                : 'border border-red-600 bg-red-100 text-red-700'
            } `}
          >
            <h1 className="text-sm">
              Chances of floods:{' '}
              <span className="font-bold">{floodPercentage}%</span>
            </h1>
            <p className="text-sm">
              Risk Type: <span className="font-bold">{floodriskChanges}</span>
            </p>
          </div>

          {/* flood chart   */}
          <FloodChart setRiverDischargeFloor={setRiverDischargeFloor} />
        </div>
      ) : (
        <div className="mt-5">
          <div
            className={`w-full p-4  rounded-lg flex flex-row items-center justify-around ${
              droughtriskChanges == 'Safe'
                ? 'text-green-700 border border-green-600 bg-green-100 '
                : droughtriskChanges == 'Moderate'
                ? 'border border-yellow-600 bg-yellow-100 text-yellow-700'
                : 'border border-red-600 bg-red-100 text-red-700'
            } `}
          >
            <h1 className="text-sm">
              Chances of Droughts:{' '}
              <span className="font-bold">{droughtPercentage}%</span>
            </h1>
            <p className="text-sm">
              Risk Type: <span className="font-bold">{droughtriskChanges}</span>
            </p>
          </div>

          {/* drought chart   */}
          <DroughtChart />
        </div>
      )}
    </>
  );
};

export default DisastersFetch;
