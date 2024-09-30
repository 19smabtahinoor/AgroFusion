"use client"

import cloud from '@/icons/cloud.svg';
import Image from 'next/image';
import ModuleTitle from '../ui/ModuleTitle';
import ViewReportBtn from '../ui/ViewReportBtn';
import TemperatureFetch from './TemperatureFetch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {longitude, latitude} from '../../datacenter/LocationTrack';

export default function Temperature() {
  const [data, setData] = useState<any>([]);
  const [celsius, setCelsius] = useState<any>();
  const [celsiusFeelsLike, setCelsiusFeelsLike] = useState<any>();
  const [infos, setInfos] = useState<any>({});

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d030577851d8a269dcfd3bd1bb8088c1
`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [data,longitude, latitude]);

  //convert fahrenheit to celcius 
  useEffect(() => {
    setCelsius(Math.round(data?.main?.temp - 273));
    setCelsiusFeelsLike(Math.round(data?.main?.feels_like - 273));
    setInfos(data?.weather?.[0])
  },[data])


  return (
    <div>
      <div className="flex flex-row justify-between">
        <ModuleTitle title="Temperature" />
        {/* <ViewReportBtn /> */}
      </div>
      {/* temp  */}
      <div className="flex flex-col items-center justify-center py-2 border border-slate-300 rounded-xl h-80 p-6 my-4">
        <div className="flex flex-row items-center space-x-2">
          {/* icon  */}
          <Image src={`https://openweathermap.org/img/wn/${infos?.icon}@2x.png`} width={30} height={20} alt="Weather Type" className='w-16 h-24 object-cover' />
          <h2 className="font-bold text-6xl">{celsius}°C</h2>
        </div>
       
       <div className='flex flex-row items-center space-x-3'>
       <p className="text-lg text-slate-500">Feels Like {celsiusFeelsLike}°C</p>
       <p className="text-lg font-semibold text-red-600">{infos?.main}</p>
       </div>
      </div>

      {/* chats  */}
      <div></div>
    </div>
  );
}
