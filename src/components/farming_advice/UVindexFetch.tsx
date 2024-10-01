import {longitude, latitude} from '../../datacenter/LocationTrack';

import React from 'react'
import getQuery from '@/lib/functions/FetchQuery';
import UVIndexChart from './UVIndexChart';


const UVindexFetch: React.FC = async  () => {
    const lat = latitude; 
    const long = longitude;
    // lat=23.8221&lon=90.4274

    const UVIndexData =await getQuery(`https://api.open-meteo.com/v1/forecast?latitude=23.822&longitude=90.4274&hourly=uv_index&timezone=auto`)

    //current time: 
//     const date = new Date(UVIndexData?.current?.time);
//   const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }); // For HH:MM format




  return (


    <div>

        {/* current data   */}
       {/* <div className='py-6'>
           <h2 className='font-semibold'>Current Weather Situation</h2>
            <div className='flex flex-row items-center justify-between mt-2 p-4 border border-slate-300 rounded-xl'>
            <h2>Last Updated:  <span className='font-bold'>{formattedTime}</span></h2>
            <h2>Percipitation: <span className='font-bold'>{UVIndexData?.current?.precipitation}mm</span></h2>
            <h2>Rain:<span className='font-bold'> {UVIndexData?.current?.rain}mm</span></h2>
            </div> 
        </div>*/}
  


      <UVIndexChart UVIndexData={UVIndexData}/>

  </div>
  )
}

export default UVindexFetch
