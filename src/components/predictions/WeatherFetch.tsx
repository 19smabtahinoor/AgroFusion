'use client';

// import { fetchWeatherApi } from 'openmeteo';
import {longitude, latitude} from '../../datacenter/LocationTrack';

import React, { useState } from 'react'
import {
    CategoryScale,
    ChartData,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip ,
    TooltipItem

  } from 'chart.js';
  import Chart from 'chart.js/auto';
  import { Line,  } from 'react-chartjs-2';
import getQuery from '@/lib/functions/FetchQuery';
  Chart.register(CategoryScale, LineElement, LinearScale, PointElement,Tooltip);


const WeatherFetch: React.FC = async  () => {
    const lat = latitude; 
    const long = longitude;
    // lat=23.8221&lon=90.4274
    // const datesArr = [];
    // const precipitationProbabilityArr = [];
    // const rainArr = [];
    // const precipitationArr = [];

    const weatherPredictionData =await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=23.8221&longitude=90.4274&daily=precipitation_sum,rain_sum,precipitation_probability_max&timezone=auto&current=precipitation,rain`)

    //current time: 
    const date = new Date(weatherPredictionData?.current?.time);
  const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }); // For HH:MM format





  //   const params = {
  //       latitude: [23.8221],
  //       longitude: [90.427],
  //   current: ["precipitation_probability_max", "precipitation_sum", "rain_sum"],
  //       hourly: "temperature_2m",
	// daily: ["precipitation_probability_max", "precipitation_sum", "rain_sum"],
	// timezone: "auto"
  //   };
  //   const url = 'https://api.open-meteo.com/v1/forecast';
  //   const responses = await fetchWeatherApi(url, params);
    
  //   // Helper function to form time ranges
  //   const range = (start: number, stop: number, step: number) =>
  //       Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
  //   // Process first location. Add a for-loop for multiple locations or weather models
  //   const response = responses[0];
    
  //   // Attributes for timezone and location
  //   const utcOffsetSeconds = response?.utcOffsetSeconds();
  //   const timezone = response?.timezone();
  //   const timezoneAbbreviation = response?.timezoneAbbreviation();
  //   const responseLatitude = response?.latitude();
  //   const responseLongitude = response?.longitude();
    
  //   const current = response?.current()!;
  //   const hourly = response?.hourly()!;
  //   const daily = response?.daily()!;
    
  //   // Note: The order of weather variables in the URL query and the indices below need to match!
  //   const weatherData = {
  //       current: {
  //           time: new Date((Number(current?.time()) + utcOffsetSeconds) * 1000),
  //           precipitationProbability: current?.variables(0)!.value(),
	// 	precipitation: current?.variables(1)!.value(),
	// 	rain: current?.variables(2)!.value(),
  //       },
  //       hourly: {
  //           time: range(Number(hourly?.time()), Number(hourly?.timeEnd()), hourly?.interval()).map(
  //               (t) => new Date((t + utcOffsetSeconds) * 1000)
  //           ),
  //           temperature: hourly?.variables(0)!.valuesArray()!, // `.valuesArray()` get an array of floats
  //           precipitation: hourly?.variables(1)!.valuesArray()!,
  //       },
  //       daily: {
  //           time: range(Number(daily?.time()), Number(daily?.timeEnd()), daily?.interval()).map(
  //               (t) => new Date((t + utcOffsetSeconds) * 1000)
  //           ),
  //           precipitationProbability: daily?.variables(0)!.valuesArray()!,
  //           precipitation: daily?.variables(1)!.valuesArray()!,
  //           rain: daily?.variables(2)!.valuesArray()!,
  //       }
  //   };
    
  //   console.log(weatherData?.current)
  //   // `weatherData` now contains a simple structure with arrays for datetime and weather data
  //   //for forecasting 
  //   for (let i = 0; i < weatherData.daily.time.length; i++) {
  //       const dater = new Date(weatherData.daily.time[i].toISOString()).getUTCDate()
  //       const month = new Date(weatherData.daily.time[i].toISOString()).getUTCMonth()+ 1;
  //       const year = new Date(weatherData.daily.time[i].toISOString()).getUTCFullYear();
  //       const dateeee = `${dater}/${month}/${year}`;
  //       datesArr.push(dateeee)
  //       precipitationProbabilityArr.push(weatherData.daily.precipitationProbability[i])
  //       rainArr.push(weatherData.daily.rain[i])
  //       precipitationArr.push(weatherData.daily.precipitation[i])
  //   }

    // console.log(weatherData?.current)
    // console.log(precipitationProbabilityArr, precipitationArr,rainArr)




    //implementing chart js

    const data: ChartData<'line' | 'bar', number[], string> = {
        labels: weatherPredictionData?.daily?.time,
        datasets: [
          {
            label: 'Precipitation Probability Max(%)',
            data: weatherPredictionData?.daily?.precipitation_probability_max,
            fill: false,
            borderColor: '#008A09',
            pointBorderWidth: 5,
            tension: 0.1,
          },
          {
            type: 'bar' as const,
            label: 'Rain Sum(mm)',
            data: weatherPredictionData?.daily?.rain_sum,
            backgroundColor: "#00308F",
            borderWidth: 1    
          },
          {
            type: 'bar' as const,
            label: 'Precipitation Sum(mm)',
            data: weatherPredictionData?.daily?.precipitation_sum,
            backgroundColor: "#ffde21",
            borderWidth: 1    
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
              max: 100,
              ticks: {
                stepSize: 20,
              },
            },
          },
        }
      

  return (


    <div>

        {/* current data   */}
        <div className='py-6'>
          <h2 className='font-semibold'>Current Weather Situation</h2>
            <div className='flex flex-row items-center justify-between mt-2 p-4 border border-slate-300 rounded-xl'>
            <h2>Last Updated:  <span className='font-bold'>{formattedTime}</span></h2>
            <h2>Percipitation: <span className='font-bold'>{weatherPredictionData?.current?.precipitation}mm</span></h2>
            <h2>Rain:<span className='font-bold'> {weatherPredictionData?.current?.rain}mm</span></h2>
            </div>
        </div>
      <Line<any>
        data={data}
        options={options}
      />

  </div>
  )
}

export default WeatherFetch