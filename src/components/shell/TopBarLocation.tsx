import React, { useEffect, useState } from 'react'
import {longitude, latitude} from '../../datacenter/LocationTrack';
import { FaLocationDot } from "react-icons/fa6";

const TopBarLocation = () => {
    const [location, setLocation] = useState<any>({});
    var requestOptions = {
        method: 'GET',
      };
      
useEffect(() => {
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=23.8221&lon=90.4274&apiKey=6e6ddceb233743eb9fb3fcc4d111435d`, requestOptions)
    .then(response => response.json())
    .then(result =>  {
        setLocation(result?.features[0]?.properties) 
    }
    )
    .catch(error => console.log('error', error));
},[longitude,latitude])


  return (
    <div className='border border-slate-200 px-2 py-3 rounded-full flex flex-row items-center space-x-2'>

        <FaLocationDot className='text-slate-700 text-lg'/>
      <h1 className='text-xs'>{location?.address_line1}</h1>
    </div>
  )
}

export default TopBarLocation
