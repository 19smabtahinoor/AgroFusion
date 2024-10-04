// 'use client';

// import { fetchWeatherApi } from 'openmeteo';
// import {longitude, latitude} from '../../datacenter/LocationTrack';

import React from 'react'
import getQuery from '@/lib/functions/FetchQuery';
import WeatherConditionChart from './WeatherConditionChart';


const WeatherFetch: React.FC = async  () => {


  // Latitude 23.8221
  // Longitude  90.4274
    const weatherPredictionData =await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=23.8221&longitude=90.4274&daily=precipitation_sum,rain_sum,precipitation_probability_max&timezone=auto&current=precipitation,rain`)

    //current time: 
    const date = new Date(weatherPredictionData?.current?.time);
  const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }); // For HH:MM format





  let rain_decision; 
      
  if(weatherPredictionData?.current?.rain > 0.1 && weatherPredictionData?.current?.rain < 2.5){
    rain_decision = "Slight"
  }else if(weatherPredictionData?.current?.rain > 2.6 && weatherPredictionData?.current?.rain < 7.5){
    rain_decision = "Moderate"
  }else if(weatherPredictionData?.current?.rain > 7.6){
    rain_decision = "Heavy"
  }else{
    rain_decision = "No Rain"
  }
  
  return (


    <div>

        {/* current data   */}
        <div className='py-6'>
          <h2 className='font-semibold'>Current Weather Situation</h2>
            <div className='flex flex-row items-center justify-between mt-2 p-4 border border-slate-300 rounded-xl'>
            <h2>Last Updated:  <span className='font-bold'>{formattedTime}</span></h2>
            <h2>Precipitation: <span className='font-bold'>{weatherPredictionData?.current?.precipitation}mm</span></h2>
            <h2>Rain:<span className='font-bold'> {weatherPredictionData?.current?.rain}mm</span></h2>
            <h2>Rain Type:<span className='font-bold'> {rain_decision}</span></h2>
            </div>
        </div>
  


      <WeatherConditionChart weatherPredictionData={weatherPredictionData}/>

  </div>
  )
}

export default WeatherFetch
