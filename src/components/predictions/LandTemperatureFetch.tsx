'use client';

import {longitude, latitude} from '../../datacenter/LocationTrack';

import React, { useEffect } from 'react'
import getQuery from '@/lib/functions/FetchQuery';
import WeatherConditionChart from './WeatherConditionChart';
import axios from 'axios';


const LandTemperatureFetch: React.FC =  () => {
  // const [data, setData] = useState<>([]);
  // const [celsius, setCelsius] = useState(0);
  // const [infos, setInfos] = useState({});


  //convert fahrenheit to celcius 
  // useEffect(() => {
  //   // setCelsius(Math.round(data?.main?.temp - 273));
  //   // setInfos(data?.weather?.[0]);
  //   // console.log("🚀 ~ Temperature ~ data:", data);

  // }, [data]);



  // Latitude 23.8221
  // Longitude  90.4274

    //current time: 
  //   const date = new Date(weatherPredictionData?.current?.time);
  // const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }); // For HH:MM format



  return (


    <div>


      {/* <WeatherConditionChart weatherPredictionData={weatherPredictionData}/> */}

  </div>
  )
}

export default LandTemperatureFetch
